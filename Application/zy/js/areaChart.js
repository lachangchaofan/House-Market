$(function(){
  var wylb = '洋房';  // 物业类型
  
  /*
   * 切换物业类型
   */
  var $selectTwo = $('#selectTwo');
  var $selection = $selectTwo.find('#selection');
  
  // 切换显示
  $selectTwo.hover(function(){
    $selection.show();
  },
  function(){
    $selection.hide();
  });
  // 点击
  $selection.find('a').click(function(){
    var id = $(this).attr('selectid');
    $selectTwo.find('.cite').html(id);
    wylb = id;
    show();
  })
  
  
  show();
  
  function show(){
    /*
     * 区域近12个月洋房成交量价走势图
     */
    var $supply = $('#supply');
    
    if($supply.length != 0){
      $.ajax({
        url: base.port('/HtmlYy/AreaCjljChart_ad.ashx'),
        type: 'get',
        data: {'city': base.city, 'qy': base.qy, 'wylb': wylb},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'ad',
        success: function(data){
          console.log(data);
          
          var stockOption = {
            tooltip : {
              trigger : 'axis'
            } ,
            legend : {
              borderWidth : 1 ,
              data : ['供应套数' , '成交套数', '均价(元/m²)'],
              top: 0
            },
            grid: {
              left: 40,
              right: 40
            },
            xAxis : [
              {
                type : 'category' ,
                data : [],  // 月份
                axisLabel : {
                  interval: 0,
                  rotate: 45
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
                max : 100000 ,
                interval : 0 ,
                axisLabel : {
                  formatter : '{value}'
                }
              }
            ] ,
            series : [
              {
                name : '供应套数' ,
                type : 'bar' ,
                data : []
              } ,
              {
                name : '成交套数' ,
                type : 'bar' ,
                data : []
              },
              {
                name : '均价(元/m²)' ,
                type : 'line' ,
                yAxisIndex: 1,
                data : []
              }
            ]
          };
          
          var Json = {};
          Json.time = []; // 时间
          Json.cjts = []; // 成交套数
          Json.xzts = []; // 供应套数
          Json.cjdj = []; // 成交单价
          
          for(var i=0; i<data.length; i++){
            Json.time.push(data[i].sj);
            Json.cjts.push(data[i].cjts);
            Json.xzts.push(data[i].xzts);
            Json.cjdj.push(data[i].cjdj);
          }
          stockOption.xAxis[0].data = Json.time;
          stockOption.series[0].data = Json.cjts;
          stockOption.series[1].data = Json.xzts;
          stockOption.series[2].data = Json.cjdj;
          
          echarts.init($supply[0]).setOption(stockOption);
        },
        error: function(msg){
          alert(base.qy + '区域近12个月'+ wylb +'成交量价走势图,获取失败');
        }
      })
    }
    
    /*
     * 区域近12个月洋房库存与消化周期
     */
    var $stock = $('#stock');
    
    if($stock.length != 0){
      $.ajax({
        url: base.port('/HtmlYy/AreaStockChart_uo.ashx'),
        type: 'get',
        data: {'city': base.city, 'qy': base.qy, 'wylb': wylb},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'uo',
        success: function(data){
          
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
                max : 50 ,
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
          alert(base.qy + '区域近12个月'+ wylb +'库存与消化周期,获取失败');
        }
      })
    }
    
    /*
     * 南城近一个月洋房成交套数排名 
     */
    var $CityRisePriceTab = $('#CityRisePriceTab');
    
    if($CityRisePriceTab.length != 0){
      
      $.ajax({
        url: base.port('/HtmlYy/AreaRanking_li.ashx'),
        type: 'get',
        data: {'city': base.city, 'qy': base.qy, 'wylb': wylb},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'vn',
        success: function(data){
          $CityRisePriceTab.find('tr').eq(0).siblings().remove();

          var house = data.root.houses.house;
          for(var i=0; i<house.length; i++){
            var oTr = document.createElement('tr');
            var html = '\
              <td>'+ house[i].qy +'</td>\
              <td>'+ house[i].scmc +'</td>\
              <td>'+ house[i].cjts +'</td>\
              <td>'+ house[i].cjdj +'</td>\
            ';
            oTr.innerHTML = html;
            $CityRisePriceTab.append(oTr);
          }
        },
        error: function(msg){
          alert(base.qy + '一个月'+ wylb +'成交套数排名失败 ');
        }
      });
    }
  }
})
