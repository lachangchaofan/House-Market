/**
 * Created by hxsd on 2016/10/14.
 */
//confirm提示框
function confirm_box(txt,fu){//txt：错误提示的信息，fu：回调函数
    var confirm_box=document.createElement('div');
    confirm_box.className='confirm_box';
    confirm_box.innerHTML='<p>'+txt+'<br><br><br><br><button type="button">确定</button><button type="button">取消</button>';
    var mlayer=modal_layer();//调用模态层
    document.body.appendChild(confirm_box);
    var oBtn=document.getElementsByTagName('button');//找到两个按钮
    oBtn[0].onclick=function(){
        document.body.removeChild(mlayer);
        document.body.removeChild(confirm_box);
       fu && fu();//如果传入第二个参数就执行回调函数
    };
    oBtn[1].onclick=function(){
        document.body.removeChild(mlayer);
        document.body.removeChild(confirm_box);
    }
}
//-----------------------------------------------------------------------------------------------------------------------
//错误弹出框简单样式
//.err_box{text-align:center;border: solid 2px rgba(255,255,0,0.5);max-width: 400px;height: 40px;color: #fff;line-height: 40px;background: red;position: absolute;}
function err_box(err_info){//err_info：错误提示信息,btn:要点击的按钮对象。
    //---------------------------------
    var time;
    //计数的函数
    function set_clock(){
        time=setTimeout(function(){
            document.body.removeChild(err);
        },2000);
    }
    //创建div并且添加内容
    var err=document.createElement('div');
    document.body.appendChild(err);
    err.className='err_box';
    err.innerHTML=err_info;
    //显示居中
    tools.showCenter(err);
    //2秒后提示框为空
    set_clock();
    //鼠标放上去清楚计时器
    err.onmouseover=function(){
        clearTimeout(time);
    };
    //鼠标离开时开始计时器
    err.onmouseout=function(){
        time=setTimeout(function(){
            document.body.removeChild(err);
            btn.disable=''
        },2000);
    }

}
//-----------------------------------------------------------------------------------------------------------------------

//模态层简单样式
//.modal{width: 100%;height: 100%;background: #000000;opacity: 0.3;position: fixed;top: 0;right: 0;}
function modal_layer(opactiy){
    var layer=document.createElement('div');//创建模态层div
    layer.className='modal';//添加模态层样式名（自定义）
    if(opactiy){
        layer.style.opacity=0;//如果有opactiy则就让模态层的透明度为零
    }
    document.body.appendChild(layer);//添加模态层到body
    return layer;//返回模态层
}
//-----------------------------------------------------------------------------------------------------------------------
//登录框
function loginBox(){
    var mlayer=modal_layer();//打开模态层 并且返回模态层的对象

    var loginDiv=document.createElement('div');
    loginDiv.className="loginBox";
    var html='<h3>登录</h3>'+
        '<form>'+
        '<p><label for="userName">用户名:</label><input class="text" id="userName" type="text"></p>'+
        '<p><label>密　码:<input class="text" type="text"></label></p>'+
        '<p>性别:<label><input type="radio">男</label> <label><input type="radio">女</label></p>'+
        '<p><button type="submit">确定</button> <button type="button">取消</button></p>'+
        '</form>'+
        '<span class="closeBtn">×</span>';

    loginDiv.innerHTML=html;
    document.body.appendChild(loginDiv);

    //居中显示
    tools.showCenter(loginDiv);

    var title=loginDiv.getElementsByTagName('h3')[0];
    //拖拽
    tools.drag(loginDiv,title);

    //关闭弹框---------------------
    var closeBtn=loginDiv.getElementsByClassName('closeBtn')[0];

    closeBtn.onclick=function(){
        document.body.removeChild(loginDiv);
        document.body.removeChild(mlayer);
    };

};
//幻灯片
function maqueer(obj_id,showNum){
    var box=document.getElementById(obj_id);
    var btn_left=box.children[0];
    var btn_right=box.children[1];
    //var aBtn=box.getElementsByTagName('ol')[0].children;
    var oul=box.getElementsByTagName('ul')[0];
    var n=0;
    var ali=oul.children;
    //得到图片li的宽度
    var li_w=tools.getStyle(ali[0],'width');
    //设置ul的宽度
    oul.style.width=li_w*ali.length+'px';
    //向页面插入按钮
    var ol=document.createElement('ol');
    for(var i=0;i<ali.length;i++){
        ol.innerHTML+='<li>'+ (showNum ? i+1 :"")+'</li>'
    };
    box.appendChild(ol);
    var aBtn=ol.children;
    aBtn[0].className='ac'
    //点击切换按钮
    for(var i=0;i<aBtn.length;i++){
        aBtn[i].index=i;
        aBtn[i].onclick=function(){

            for(var j=0;j<aBtn.length;j++){
                aBtn[j].className='';
            }
            this.className='ac';
            tools.run(oul,{'left':-li_w*this.index})
        };

        //改变按钮
        function changeBtn(n){
            for(var k=0;k<aBtn.length;k++){
                aBtn[k].className='';
            }
            aBtn[n].className='ac';
        }

        //左右切换
        //--------------------------------------
        btn_left.onclick=function(){
            n--;
            if(n<0){n=0}
            tools.run(oul,{'left':-li_w*n});
            changeBtn(n)

        };
        btn_right.onclick=function(){
            n++;
            if(n>=ali.length-1){n=ali.length-1}
            tools.run(oul,{'left':-li_w*n});
            changeBtn(n)
        }
    }

}
//选项卡
function myTab(id,auto){
    //点击li 切换ac
    var tab=document.getElementById(id);
    var tabList=tab.getElementsByTagName('ul')[0];
    var aLi=tabList.getElementsByTagName('li');
    var aTabItem=tab.getElementsByClassName('tabItem');

    var n=0;//自动运行用的计数器

    var timer;  //定时器对象

    function changeTab(){//切换标签
        for(var j=0; j<aLi.length; j++){
            aLi[j].className='';
            aTabItem[j].style.display='none';
        };
        //指定n显示
        aLi[n].className='ac';
        aTabItem[n].style.display='block';
    };



    //点击切换---------------------------------------
    for(var i=0; i<aLi.length; i++){
        aLi[i].index=i;//发牌照

        aLi[i].onclick=function(){

            n=this.index;//调整计数器
            //所有的li去掉ac

            changeTab();

            /*for(var j=0; j<aLi.length; j++){
             aLi[j].className='';
             aTabItem[j].style.display='none';
             };
             //this加上ac

             this.className='ac';
             aTabItem[this.index].style.display='block';*/
        };
    };

    if(auto){
        //自动切换---------------------------------
        function autoRun(){
            timer=setInterval(function(){
                //所有的li去掉ac
                //所有的aTabItem隐藏


                //计数器自动累加
                n++;
                //当n>aLi.length n=0
                if(n>aLi.length-1){
                    n=0;
                }
                changeTab();
            },1000);
        };

        autoRun();

        //鼠标进入tab，暂定自动运行-------------------------
        tab.onmouseover=function(){
            clearInterval(timer);
        };


        //鼠标离开tab，重新开始自动运行-------------------------
        tab.onmouseout=function(){
            //重新启动定时器
            autoRun();
        }
    };
};
//放大镜
function big(id,img_divId){
    var oDiv1=document.getElementById(id);
    var oDiv2=document.getElementById(img_divId);
    var bigImg=oDiv2.getElementsByTagName('img')[0];

    oDiv1.onmousemove=function(ev){
        oDiv2.style.display='block';//move的时候使span和oDiv2显示
        var oEv=ev||window.event;
        var l=oEv.clientX-oDiv1.offsetLeft-oDiv2.offsetWidth/2;
        var t=oEv.clientY-oDiv1.offsetTop-oDiv2.offsetHeight/2;
        //判断handle的移动范围
        if(l<0){
            l=0
        }
        if(l>(oDiv1.offsetWidth-oDiv2.offsetWidth)){
            l=oDiv1.offsetWidth-oDiv2.offsetWidth
        }
        if(t<0){
            t=0
        }
        if(t>oDiv1.offsetHeight-oDiv2.offsetHeight){
            t=oDiv1.offsetHeight-oDiv2.offsetHeight
        }
        //给handle赋予left和top值，使其移动；
        oDiv2.style.left=l+'px';
        oDiv2.style.top=t+'px';


        var l_rate=l / (oDiv1.offsetWidth-oDiv2.offsetWidth);
        var t_rate=t / (oDiv1.offsetHeight-oDiv2.offsetHeight);


        bigImg.style.left= (oDiv2.offsetWidth-bigImg.offsetWidth)*l_rate +'px'; //外box 减 内部大图片，为负值
        bigImg.style.top= (oDiv2.offsetHeight-bigImg.offsetHeight)*t_rate +'px';
    };

    oDiv1.onmouseout=function(){
        oDiv2.style.display='none';
    }

};
//五星评价
function pinJia(ul_id){
    var oli=document.getElementById(ul_id).children;
    var n=-1;
    for(var i=0;i<oli.length;i++){
        oli[i].index=i;
        oli[i].onmousemove=function(){
            for(var i=0;i<oli.length;i++){
                if(i<=this.index){
                    oli[i].className='yan'
                }else {
                    oli[i].className=''
                }
            }
        }
        //------------------------------------------------
        //处理点击事
        oli[i].onclick=function(){
            n=this.index
        }
        oli[i].onmouseout=function(){
            if(n>0&&n<oli.length){
                for(var i=0;i<=n;i++){
                    oli[i].className='yan'
                }
                for(var i=n+1;i<oli.length;i++){
                    oli[i].className=''
                }
            }else {
                for(var i=0;i<oli.length;i++){
                    oli[i].className=''
                }
            }
        }
    }
};
//计算器
function cmd(ul_id){
    var ali=document.getElementById(ul_id).children;
    for(var i=0;i<ali.length;i++){
        ali[i].index=i;
        ali[i].style.left=ali[i].offsetLeft+'px' ;
        ali[i].style.top=ali[i].offsetTop+'px'
    }
    for(var i=0;i<ali.length;i++){
        ali[i].style.position='absolute';
        //鼠标放上去的事件
        ali[i].onmouseover=function(){
            this.className='zoom'
        }
        //鼠标移开时的事件
        ali[i].onmouseout=function(){
            this.className='';
        }

    }
    var arr=[97,98,99,100,101,102,103,104,105];
    function run(ev,zoom){
        var n;
        var m;
        for(var i=0;i<ali.length;i++){
            ev=ev||window.event;
            m=ev.keyCode;
            ali[i].setAttribute('name',i);
            n =parseInt( ali[i].getAttribute('name'));
            if(m==arr[n]){
                ali[n].className=zoom ? 'zoom': '';
            }
        }
    }
    document.onkeydown=function(ev){

        run(ev,true)
    };
    document.onkeyup=function(ev){
        run(ev)
    };
}


