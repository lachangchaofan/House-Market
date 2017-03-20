option1 = {
  tooltip : {
    trigger : 'axis'
  } ,
  color:["#fc7a18","#00a0e9"],
  legend : {
    bottom : 5 ,
    borderColor : '#ccc' ,
    borderWidth : 1 ,
    data : ['成交' , '预定' , '成交比']
  } ,
  xAxis : [
    {
      type : 'category' ,
      data : ['1月' , '2月' , '3月' , '4月' , '5月' , '6月' , '7月' , '8月' , '9月' , '10月' , '11月' , '12月'] ,
      axisLabel : {
        interval:0,
        rotate:45
      },
      axisTick:{
        lineStyle:{
          color:"#F00"
        }
      }
    }
  ] ,
  yAxis : [
    {
      type : 'value' ,
      name : ' ' ,
      min : 0 ,
      max : 150 ,
      interval : 30 ,
      axisLabel : {
        formatter : '{value}'
      }
    } ,
    {
      type : 'value' ,
      name : ' ' ,
      min : 0 ,
      max : 500 ,
      interval : 100 ,
      axisLabel : {
        formatter : '{value}'
      }
    }
  ] ,
  series : [
    {
      name : '成交' ,
      type : 'bar' ,
      data : [20 , 40 , 60 , 110 , 120 , 70 , 140 , 100 , 30 , 20 , 50 , 30]
    } ,
    {
      name : '预定' ,
      type : 'bar' ,
      data : [10 , 30 , 40 , 130 , 100 , 120 , 80 , 130 , 50 , 60 , 20 , 20]
    } ,
    {
      name : '成交比' ,
      type : 'line' ,
      yAxisIndex : 1 ,
      data : [20 , 35 , 50 , 120 , 100 , 90 , 120 , 220 , 220 , 120 , 120 , 20]
    }
  ]
};
option2 = {
  color : ['#92cbf6'] ,
  tooltip : {
    trigger : 'axis' ,
    axisPointer : {
      type : 'shadow'
    }
  } ,
  legend : {
    show : false
  } ,
  grid : {
    left : '10' ,
    right : '0' ,
    bottom : '0' ,
    top:0
  } ,
  xAxis : {
    type : 'value' ,
    axisLine : {
      show : false ,
    } ,
    axisTick : {
      show : false
    } ,
    axisLabel : {
      show : false
    } ,
    splitLine : {
      show : false
    }
  } ,
  yAxis : {
    type : 'category' ,
    data : [] ,
    axisLabel : {
      show : false
    } ,
    axisTick : {
      show : false
    } ,
    axisLine : {
      show : false
    }
  } ,
  series : [
    {
      name : '2011年' ,
      type : 'bar' ,
      label : {
        normal : {
          show : true ,
          position : 'insideRight' ,
          textStyle : {
            color : "#000"
          }
        }
      } ,
      data : [18 , 23 , 29 , 104 , 131]
    }
  ]
};
echarts.init($(".map")[0]).setOption(option1);
echarts.init($(".map")[1]).setOption(option2);
