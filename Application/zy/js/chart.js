(function(){
  
  /*
   * 图标数据
   */
  var option = {
    tooltip : {
      trigger : 'axis'
    } ,
    legend : {
      borderWidth : 1 ,
      data : ['成交面积(万m²)' , '供应面积(万m²)', '成交均价(元/m²)'],
      top: 0
    },
    grid: {
      left: 40,
      right: 40
    },
    xAxis : [
      {
        type : 'category' ,
        data : ['1月' , '2月' , '3月' , '4月' , '5月' , '6月' , '7月' , '8月' , '9月' , '10月' , '11月' , '12月'] ,
        axisLabel : {
          interval: 0,
          rotate: 45
        },
        nameTextStyle: {
          color: 'red' 
        }
      }
    ] ,
    yAxis : [
      {
        type : 'value' ,
        min : 0 ,
        max : 150 ,
        interval : 0 ,
        axisLabel : {
          formatter : '{value}'
        }
      } ,
      {
        type : 'value' ,
        min : 0 ,
        max : 100000 ,
        interval : 0 ,
        axisLabel : {
          formatter : '{value}'
        }
      }
    ] ,
    series : [
      {
        name : '成交面积(万m²)' ,
        type : 'bar' ,
        data : [10 , 30 , 40 , 130 , 100 , 120 , 80 , 130 , 50 , 60 , 20 , 20]
      } ,
      {
        name : '供应面积(万m²)' ,
        type : 'bar' ,
        data : [20 , 35 , 50 , 120 , 100 , 90 , 120 , 220 , 220 , 120 , 120 , 20]
      },
      {
        name : '成交均价(元/m²)' ,
        type : 'line' ,
        yAxisIndex: 1,
        data : [10 , 40 , 60 , 110 , 120 , 70 , 140 , 100 , 30 , 20 , 50 , 30]
      }
    ]
  };
  // 设置图表数据
  function setOption(jsonName, jsonName2, data, obj){
    // 如果有jsonName不是空说明，传入的不是东莞数据。
    if(jsonName != ''){
      var jsonData = data[jsonName][jsonName2];
    }else{
      var jsonData = data; // 如果是东莞市数据，则直接使用data
    }
    var Json = {};
    Json.time = []; // 成交时间
    Json.cjdj = []; // 成交单价
    Json.cjmj = []; // 成交面积
    Json.xzmj = []; // 供应面积
    
    for(var i=0; i<jsonData.length; i++){
      Json.time.push(jsonData[i].sj);
      Json.cjdj.push(jsonData[i].cjdj);
      Json.cjmj.push(jsonData[i].cjmj);
      Json.xzmj.push(jsonData[i].xzmj);
    }
    
    option.xAxis[0].data = Json.time;
    option.series[0].data = Json.cjmj;
    option.series[1].data = Json.xzmj;
    option.series[2].data = Json.cjdj;
    
    init(obj);
  }
  // 初始化图表数据
  function init(obj){
    echarts.init(obj).setOption(option);
  }
  
  var $searchNav = $('#search-nav');
  // 判断一下是不是区域搜的首页
  if($searchNav.length != 0){
    /*
     * 如果要查询东莞以外的区域，弹窗阻止
     */
    
    $("#no_data_pop .close").on('click',function () {
        $("#no_data_pop").hide();
    });
    $("#no_data_pop .button").on('click',function () {
        $("#no_data_pop").hide();
    })
    
    $searchNav.find('a').click(function(){
      if($(this).attr('alt') != '东莞'){
        $("#no_data_pop").show();
        return false;
      }
    });
    
    /*
     * 接入近12个月住宅供需量价走势图，除了东莞市
     */
    $.ajax({
      url: base.port('/HtmlYy/CityQtCjljChart_sw.ashx'),
      type: 'get',
      dataType: 'jsonp',
      jsonp: 'callback',
      jsonpCallback: 'sw',
      success: function(data){
        console.log(data);
        var $map = $(".map");
        var root = data.root;
        
        $map.each(function(){
          var sCity = $(this).attr('data-city'); // 获取当前的map地名
          if(sCity == '深圳'){
            // 深圳市
            setOption('shenzhens', 'shenzhen', root, this);
          }else if(sCity == '惠州'){
            // 惠州市
            setOption('huizhous', 'huizhou', root, this);
          }else if(sCity == '中山'){
            // 中山市
            setOption('zhongshans', 'zhongshan', root, this);
          }else if(sCity == '珠海'){
            // 珠海市
            setOption('zhuhais', 'zhuhai', root, this);
          }
        })
  
      },
      error: function(msg){
        alert('近12个月住宅供需量价走势图');
      }
    });
    
    /*
     * 接入珠三角主要城市月度房价涨幅
     */
    $.ajax({
      url: base.port('/HtmlYy/CityRisePrice_vn.ashx'),
      type: 'get',
      dataType: 'jsonp',
      jsonp: 'callback',
      jsonpCallback: 'vn',
      success: function(data){
        console.log(data);
        var $CityRisePriceTab = $('#CityRisePriceTab');
    
        for(var i=0; i<data.length; i++){
          var oTr = document.createElement('tr');
          var html = '\
            <td>'+ data[i].city +'</td>\
            <td>'+ data[i].jzmj +'</td>\
            <td>'+ data[i].cjdj +'</td>\
            <td>'+ data[i].zf_hb +'</td>\
            <td>'+ data[i].zf_tb +'</td>\
          ';
          oTr.innerHTML = html;
          $CityRisePriceTab.append(oTr);
        }
      },
      error: function(msg){
        alert('珠三角主要城市月度房价涨幅失败');
      }
    });
  }
  
  /*
   * 接入东莞市12个月住宅供需量价走势图
   */
  $.ajax({
    url: base.port('/HtmlYy/CityDgCjljChart_by.ashx'),
    type: 'get',
    dataType: 'jsonp',
    data: {'city': '东莞市'},
    jsonp: 'callback',
    jsonpCallback: 'by',
    success: function(data){
      console.log(data);
      var $map = $(".map");
      
      $map.each(function(){
        var sCity = $(this).attr('data-city'); // 获取当前的map地名
        if(sCity == '东莞'){
          // 东莞市不需要传入市名
          setOption('', '', data, this);
        }
      })
    },
    error: function(msg){
      alert('获取东莞市12个月住宅供需量价走势图失败');
    }
  });

  
  /*
   * 接入东莞市近12个月住宅库存及消化周期
   */
  var $stock = $('#stock');
  
  if($stock.length != 0){
    $.ajax({
      url: base.port('/HtmlYy/CityStockChart_oi.ashx'),
      type: 'get',
      data: {'city': '东莞市'},
      dataType: 'jsonp',
      jsonp: 'callback',
      jsonpCallback: 'oi',
      success: function(data){
        console.log(data);
        var stockOption = {
          tooltip : {
            trigger : 'axis'
          } ,
          legend : {
            borderWidth : 1 ,
            data : ['存量(万m²)' , '消化周期(月)'],
            top: 0
          },
          grid: {
            left: 40,
            right: 40
          },
          xAxis : [
            {
              type : 'category' ,
              data : ['1月' , '2月' , '3月' , '4月' , '5月' , '6月' , '7月' , '8月' , '9月' , '10月' , '11月' , '12月'] ,
              axisLabel : {
                interval: 0,
                rotate: 45
              },
              nameTextStyle: {
                color: 'red' 
              }
            }
          ] ,
          yAxis : [
            {
              type : 'value' ,
              min : 0 ,
              max : 1000 ,
              interval : 0 ,
              axisLabel : {
                formatter : '{value}'
              }
            } ,
            {
              type : 'value' ,
              min : 0 ,
              max : 24 ,
              interval : 0 ,
              axisLabel : {
                formatter : '{value}'
              }
            }
          ] ,
          series : [
            {
              name : '存量(万m²)' ,
              type : 'bar' ,
              data : [10 , 30 , 40 , 130 , 100 , 120 , 80 , 130 , 50 , 60 , 20 , 20]
            } ,
            {
              name : '消化周期(月)' ,
              type : 'line' ,
              yAxisIndex: 1,
              data : [20 , 35 , 50 , 120 , 100 , 90 , 120 , 220 , 220 , 120 , 120 , 20]
            }
          ]
        };
        
        var Json = {};
        Json.time = []; // 时间
        Json.ksmj = []; // 库存量
        Json.xhzq = []; // 消化周期
        
        for(var i=0; i<data.length; i++){
          Json.time.push(data[i].sj);
          Json.ksmj.push(data[i].ksmj);
          Json.xhzq.push(data[i].xhzq);
        }
        stockOption.xAxis[0].data = Json.time;
        stockOption.series[0].data = Json.ksmj;
        stockOption.series[1].data = Json.xhzq;
        
        echarts.init($stock[0]).setOption(stockOption);
      },
      error: function(msg){
        alert('获取东莞市近12个月住宅库存及消化周期失败');
      }
    });
  }

})()
