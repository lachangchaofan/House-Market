option = {
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
var length = $(".map").length;
for (var i = 0; i < length; i++) {
  echarts.init($(".map")[i]).setOption(option);
}