define(function(require,exports,module){

    require("jquery");
    var object={};

    var mapJson = [{
         id:1,
         name:'麻涌镇',
         width: (102.6/0.9),
         left: (9/0.9),
         top:(59.4/0.9),
         areaPos:{
             left:32,
             top:65
         },
        hotPoint:{
            width:80,
            height:140,
            left:0,
            top:-15,
            show: 'block'
        }
    },{
        id:2,
        name:'中堂镇',
         width:(177.6/0.9),
         left: (91.6/0.9),
         top:(6.2/0.9),
         areaPos:{
            left:48,
            top:60
         },
        hotPoint:{
            width:120,
            height:60,
            left:-12,
            top:5,
            show: 'block'
        }
    },{
        id:3,
        name: '高埗镇',
        width:(93/0.9),
        left:(204.6/0.9),
        top:(18.2/0.9),
        areaPos:{
            left:35,
            top:35
        },
        hotPoint:{
            width:90,
            height:50,
            left:0,
            top:15,
            show: 'block'
        }
    },{
        id:4,
        name: '望牛墩镇',
        width:(104/0.9),
        left:(78.6/0.9),
        top:(89.2/0.9),
        areaPos:{
            left:39,
            top:33
        },
        hotPoint:{
            width:90,
            height:60,
            left:1,
            top:15,
            show: 'block'
        }
    },{
        id:5,
        name: '万江区',
        width:(125/0.9),
        left:(162.6/0.9),
        top:(68.2/0.9),
        areaPos:{
            left:35,
            top:48
        },
        hotPoint:{
            width:86,
            height:90,
            left:0,
            top:0,
            show: 'block'
        }
    },{
        id:6,
        name: '道滘镇',
        width:(123/0.9),
        left:(91.6/0.9),
        top:(135.2/0.9),
        areaPos:{
            left:68,
            top:48
        },
        hotPoint:{
            width:90,
            height:100,
            left:0,
            top:0,
            show: 'block'
        }
    },{
        id:7,
        name: '洪梅镇',
        width:(63/0.9),
        left:(72.6/0.9),
        top:(151.2/0.9),
        areaPos:{
            left:13,
            top:46
        },
        hotPoint:{
            width:70,
            height:110,
            left:0,
            top:0,
            show: 'block'
        }
    },{
        id:8,
        name: '莞城区',
        width:(60/0.9),
        left:(245.6/0.9),
        top:(108.2/0.9),
        areaPos:{
            left:16,
            top:14
        },
        hotPoint:{
            width:60,
            height:60,
            left:10,
            top:10,
            show: 'block'
        }
    },{
        id:9,
        name: '东城区',
        width:(109/0.9),
        left:(268.6/0.9),
        top:(57.2/0.9),
        areaPos:{
            left:40,
            top:125
        },
        hotPoint:{
            width:70,
            height:200,
            left:20,
            top:-80,
            show: 'block'
        }
    },{
        id:10,
        name: '沙田镇',
        width:(124/0.9),
        left:(43/0.9),
        top:(196.2/0.9),
        areaPos:{
            left:42,
            top:115
        },
        hotPoint:{
            width:110,
            height:170,
            left:-10,
            top:-10,
            show: 'block'
        }
    },{
        id:11,
        name: '石碣镇',
        width:(120/0.9),
        left:(272/0.9),
        top:(19.2/0.9),
        areaPos:{
            left:50,
            top:22
        },
        hotPoint:{
            width:100,
            height:80,
            left:-5,
            top:0,
            show: 'block'
        }
    },{
        id:12,
        name: '石龙镇',
        width:(61/0.9),
        left:(374/0.9),
        top:(20.2/0.9),
        areaPos:{
            left:24,
            top:17
        },
        hotPoint:{
            width:70,
            height:60,
            left:0,
            top:10,
            show: 'block'
        }
    },{
        id:13,
        name: '南城区',
        width:(119/0.9),
        left:(193/0.9),
        top:(141.2/0.9),
        areaPos:{
            left:48,
            top:58
        },
        hotPoint:{
            width:100,
            height:130,
            left:0,
            top:0,
            show: 'block'
        }
    },{
        id:14,
        name: '厚街镇',
        width:(186/0.9),
        left:(125/0.9),
        top:(218.2/0.9),
        areaPos:{
            left:80,
            top:70
        },
        hotPoint:{
            width:160,
            height:100,
            left:-42,
            top:0,
            show: 'block'
        }
    },{
        id:15,
        name: '虎门镇',
        width:(221/0.9),
        left:(121/0.9),
        top:(332.2/0.9),
        areaPos:{
            left:85,
            top:55
        },
        hotPoint:{
            width:165,
            height:190,
            left:-40,
            top:-10,
            show: 'block'
        }
    },{
        id:16,
        name: '长安镇',
        width:(160/0.9),
        left:(219/0.9),
        top:(377/0.9),
        areaPos:{
            left:73,
            top:65
        },
        hotPoint:{
            width:150,
            height:130,
            left:-20,
            top:-20,
            show: 'block'
        }
    },{
        id:17,
        name: '大岭山镇',
        width:(131/0.9),
        left:(295/0.9),
        top:(230/0.9),
        areaPos:{
            left:36,
            top:75
        },
        hotPoint:{
            width:100,
            height:160,
            left:0,
            top:-20,
            show: 'block'
        }
    },{
        id:18,
        name: '石排镇',
        width:(139/0.9),
        left:(428/0.9),
        top:(32/0.9),
        areaPos:{
            left:62,
            top:34
        },
        hotPoint:{
            width:130,
            height:65,
            left:-30,
            top:0,
            show: 'block'
        }
    },{
        id:19,
        name: '茶山镇',
        width:(114/0.9),
        left:(370/0.9),
        top:(51/0.9),
        areaPos:{
            left:45,
            top:45
        },
        hotPoint:{
            width:110,
            height:90,
            left:-20,
            top:0,
            show: 'block'
        }
    },{
        id:20,
        name: '寮步镇',
        width:(133/0.9),
        left:(333/0.9),
        top:(130/0.9),
        areaPos:{
            left:72,
            top:45
        },
        hotPoint:{
            width:130,
            height:100,
            left:-40,
            top:0,
            show: 'block'
        }
    },{
        id:21,
        name: '松山湖',
        width:(100/0.9),
        left:(384/0.9),
        top:(207/0.9),
        areaPos:{
            left:25,
            top:80
        },
        hotPoint:{
            width:70,
            height:160,
            left:0,
            top:-30,
            show: 'block'
        }
    },{
        id:22,
        name: '大朗镇',
        width:(143/0.9),
        left:(408/0.9),
        top:(213/0.9),
        areaPos:{
            left:100,
            top:85
        },
        hotPoint:{
            width:100,
            height:180,
            left:-30,
            top:-20,
            show: 'block'
        }
    },{
        id:23,
        name: '东坑镇',
        width:(83/0.9),
        left:(443/0.9),
        top:(143/0.9),
        areaPos:{
            left:36,
            top:41
        },
        hotPoint:{
            width:100,
            height:60,
            left:0,
            top:10,
            show: 'block'
        }
    },{
        id:24,
        name: '横沥镇',
        width:(118/0.9),
        left:(474/0.9),
        top:(103/0.9),
        areaPos:{
            left:50,
            top:20
        },
        hotPoint:{
            width:100,
            height:100,
            left:-10,
            top:20,
            show: 'block'
        }
    },{
        id:25,
        name: '常平镇',
        width:(171/0.9),
        left:(496/0.9),
        top:(141/0.9),
        areaPos:{
            left:85,
            top:80
        },
        hotPoint:{
            width:150,
            height:120,
            left:-40,
            top:-20,
            show: 'block'
        }
    },{
        id:26,
        name: '企石镇',
        width:(147/0.9),
        left:(530/0.9),
        top:(48/0.9),
        areaPos:{
            left:80,
            top:40
        },
        hotPoint:{
            width:130,
            height:80,
            left:-30,
            top:0,
            show: 'block'
        }
    },{
        id:27,
        name: '桥头镇',
        width:(129/0.9),
        left:(598/0.9),
        top:(107/0.9),
        areaPos:{
            left:61,
            top:45
        },
        hotPoint:{
            width:120,
            height:90,
            left:-20,
            top:0,
            show: 'block'
        }
    },{
        id:28,
        name: '黄江镇',
        width:(140/0.9),
        left:(484/0.9),
        top:(265/0.9),
        areaPos:{
            left:72,
            top:95
        },
        hotPoint:{
            width:130,
            height:170,
            left:-20,
            top:-60,
            show: 'block'
        }
    },{
        id:29,
        name: '谢岗镇',
        width:(207/0.9),
        left:(652/0.9),
        top:(180/0.9),
        areaPos:{
            left:115,
            top:45
        },
        hotPoint:{
            width:200,
            height:130,
            left:-60,
            top:0,
            show: 'block'
        }
    },{
        id:30,
        name: '樟木头镇',
        width:(159/0.9),
        left:(606/0.9),
        top:(238/0.9),
        areaPos:{
            left:50,
            top:55
        },
        hotPoint:{
            width:150,
            height:160,
            left:-20,
            top:-20,
            show: 'block'
        }
    },{
        id:31,
        name: '塘厦镇',
        width:(177/0.9),
        left:(546/0.9),
        top:(340/0.9),
        areaPos:{
            left:90,
            top:95
        },
        hotPoint:{
            width:170,
            height:170,
            left:-50,
            top:-50,
            show: 'block'
        }
    },{
        id:32,
        name: '清溪镇',
        width:(154/0.9),
        left:(679/0.9),
        top:(306/0.9),
        areaPos:{
            left:76,
            top:76
        },
        hotPoint:{
            width:160,
            height:180,
            left:-40,
            top:-40,
            show: 'block'
        }
    },{
        id:33,
        name: '凤岗镇',
        width:(126/0.9),
        left:(679/0.9),
        top:(463/0.9),
        areaPos:{
            left:60,
            top:50
        },
        hotPoint:{
            width:130,
            height:180,
            left:-30,
            top:-30,
            show: 'block'
        }
    }]




    object.initMap = function () {
        var clientWidth                    = ($(window).width() / 320 * 62.5)+"%";
        $('html').css({'font-size' : clientWidth});
        var  mapWidth                    = $(".map_img").width();
        var  proportion                    = ($(".map_img").width()/960);
        var  mapHeight                   =  proportion * 696;
         console.log(proportion);
        $(".map_center").css({'height': mapHeight+'px','margin-top': -(mapHeight/2)+'px'});
        $(".clickArea").css({'width':(70*proportion)+'px','height':(100 * proportion)+'px'});

        for(var i = 0; i< mapJson.length; i++){
            var tempWidth         =  mapJson[i].width * proportion;
            var tempLeft             =  mapJson[i].left  * proportion;
            var tempTop             =  mapJson[i].top  * proportion;
            var tempAreaLeft     = mapJson[i].areaPos.left * proportion;
            var tempAreaTop     = mapJson[i].areaPos.top * proportion;
            var hotPointWidth   = mapJson[i].hotPoint.width * proportion;
            var hotPointHeight  = mapJson[i].hotPoint.height * proportion;
            var hotPointLeft  = mapJson[i].hotPoint.left * proportion;
            var hotPointTop  = mapJson[i].hotPoint.top * proportion;

            $(".map_area"+(i+1)).css({'width': tempWidth,'left': tempLeft, 'top':tempTop});
            $(".map_area"+(i+1)).find('.map_areaName').css({'left': tempAreaLeft,'top': tempAreaTop});


            var clickAreaLeft   = $(".map_area"+(i+1)).position().left   + tempAreaLeft -  ($(".clickArea").width()/3);
            var clickAreaTop   = $(".map_area"+(i+1)).position().top   + tempAreaTop -  ($(".clickArea").height()/3);
            $('.clickArea').eq(i).css({'left': clickAreaLeft, top: clickAreaTop});
            $('.clickArea').eq(i).find('.map_areaHotPoint').css({'width':hotPointWidth,'height':hotPointHeight,'left':hotPointLeft,'top':hotPointTop,'display':mapJson[i].hotPoint.show});

            $('.clickArea').eq(i).click(function(){
                window.open($(this).attr('data-url'),'_blank');
            })

           $('.map_cityStats').css({'left':$(".map_area13").offset().left + 65*proportion,'top':$(".map_area13").offset().top + 40*proportion ,'width':15*proportion,'height':15*proportion});
           $(".map_guangzhou").css({'left':$(".map_area1").offset().left-80*proportion,'top': $(".map_area1").offset().top+70*proportion});
           $(".map_huizhou").css({'left':$(".map_area27").offset().left+160*proportion,'top': $(".map_area27").offset().top-30*proportion});
           $(".map_shenzhen").css({'left':$(".map_area31").offset().left-140*proportion,'top': $(".map_area31").offset().top+180*proportion});
           $(".map_allTitle").css({'left':$(".map_area18").offset().left+100*proportion,'top': $(".map_area18").offset().top-50*proportion});
        }

    }

    object.addArea = function (httpUrl,resultJson) {

        var imgString ='<div class="map_shuiYin"><img src="images/sy.png" /></div><img src="'+httpUrl+'images/dongditu.png"  class="map_img">';
        var areaBlock ='<div class="map_clickArea">';

        for(var i =0 ; i< mapJson.length; i++){

            for(var j=0; j<resultJson.length; j++){

                if(resultJson[j].qy == mapJson[i].name){

                    var areaName     = resultJson[j].qy;
                    var areaBq          = resultJson[j].cjdj_bq;
                    var areaHb         = resultJson[j].cjdj_hb+"%";
                    var areaBqColor ="";
                    var areaJtou       ="";

                    if(areaBq==0){
                        areaBq = "无成交";
                    }
                    if(resultJson[j].cjdj_hb > 0){
                        areaBqColor       ="map_areaRedBq";
                        areaJtou       ='<span class="map_areaJt"><img src="'+httpUrl+'images/map_redJt.png"/></span>';
                    }else if(resultJson[j].cjdj_hb < 0){
                        areaBqColor="map_areaGreenBq";
                        areaJtou       ='<span class="map_areaJt"><img src="'+httpUrl+'images/map_greenJt.png"/></span>';
                    }else{
                        areaBqColor="map_areaHuiseBq";
                        areaHb = "持平";
                    }

                    imgString += '<div class="map_areaBlock  map_area'+(i+1)+'" style="z-index:'+(mapJson.length-i)+'"><span class="map_areaName">'+areaName+'</span><img src="'+httpUrl+'images/map'+(i+1)+'.png" /></div>';
                    areaBlock +='<div class="clickArea" areaId="'+(i+1)+'" data-url="'+resultJson[j].href+'"><span class="map_areaData"><span class="'+areaBqColor+'">'+areaBq+'</span><span class="'+areaBqColor+'">'+areaHb +'</span>'+areaJtou+'</span><span class="map_areaHotPoint"></span></div>';

                    //console.log(resultJson[j])
                }
            }

        }
        areaBlock+="</div>";
        imgString+=areaBlock;
        $(".map_center").html(imgString)

    }

    object.enterArea = function(httpUrl){

        $(document).on('mouseenter','.clickArea',function(){
            $('.map_area'+$(this).attr('areaId')).find('img').attr('src',httpUrl+'images/map'+$(this).attr('areaId')+"_hover.png");
            $('.map_area'+$(this).attr('areaId')).find('.map_areaName').addClass('hover');

            $(this).mouseleave(function(){
                $('.map_area'+$(this).attr('areaId')).find('img').attr('src',httpUrl+'images/map'+$(this).attr('areaId')+".png");
                $('.map_area'+$(this).attr('areaId')).find('.map_areaName').removeClass('hover');
            })
        })

    }


    object.loadingFun = function(httpUrl){

        var imageNums = 0;
        var  imageArray =[];
        for(var i=1; i<=33; i++){
            imageArray.push(httpUrl+"images/map"+i+".png");
            imageArray.push(httpUrl+"images/map"+i+"_hover.png");
        }

        for(var i=0; i < imageArray.length; i++) {
            var onloadPic = new Image();
            onloadPic.src =  imageArray[i];

            onloadPic.onload = function () {

                imageNums++;
                if (imageNums == imageArray.length) {
                    object.ajaxServiceFun(httpUrl);
                    return;
                }
                $(".map_tips").text("正在加载资源："+Math.round((imageNums/(imageArray.length))*100)+"%");
                this.onload = null;
            }
        }

    }


    object.ajaxServiceFun = function(httpUrl){

        $(".map_tips").text("正在请求服务,请稍等...");

        $.ajax({
            url:'http://120.39.243.42:8079/htmlyy/mapprice.ashx',
            type:'GET',
            dataType:'jsonp',                              //指定为jsonp类型
            data:{"city":"东莞市"},
            jsonp:'callback',
            jsonpCallback:'abc',
            success:function(resultJson){                  //成功执行处理，对应后台返回的getName(data)方法。

                $(".map_tips").text("加载完成！");
                $(".map_tips").hide();
                $(".map_center").show();
                $(".map_center_bottom").show();
                object.addArea(httpUrl,resultJson);
                object.initMap();
                object.enterArea(httpUrl);

                $(window).resize(function(){
                    object.initMap();
                });

            },
            error:function(msg){
                 //执行错误
                $(".map_tips").text(msg.toSource());
            }
        });
    }


    object.init = function(httpUrl){
        object.loadingFun(httpUrl);
    }



    module.exports=object;   //直接把整个模块对象导出;
})
