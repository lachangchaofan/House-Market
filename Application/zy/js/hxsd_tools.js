// JavaScript Document
function documentReady(fn){
	if(document.addEventListener){document.addEventListener('DOMContentLoaded'.fn,false)}
	else {document.attachEvent('onreadystatchange',fn,function(){
		if(document.readyState=='complete'){fn&&fn()}
	})}
}
//----------------------------------------------------------------------------------------------
var tools={
	//鼠标滚轮事件
	'mouseWheel':function (obj,fn){//obj:要滚动的对象，fn：回调函数，direct：回调函数的参数
		if(window.navigator.userAgent.indexOf('Firefox')!=-1){
			obj.addEventListener('DOMMouseScroll',wheelFn,false);
		}else obj.onmousewheel=wheelFn;

		function wheelFn(ev){
			var oEv=ev||event;
			var direct=oEv.wheelDelta ? oEv.wheelDelta<0 : oEv.detail>0;
			fn && fn(direct);//将direct作为参数传递出去
			if(window.event){//IE
				oEv.returnValue = false; //ie 阻止默认事件
				return false;//ie9 以上阻止回车
			}
			else{
				oEv.preventDefault();//阻止默认事件 firefox
			}
		};
	},

//-----------------------------------------------------------------------------------------------
//过滤文本和空格
	'get_firstChild':function(elm){//elm:对象。得到第一个子元素节点
		var x=elm.firstChild;
		while (x.nodeType!=1){
			x=x.nextSibling;//把自己变成节点，while继续向前查找
		}
		return x;
	},
	'get_lastChild':function (elm){//elm:对象。得到最后一个子元素节点
		var x=elm.lastChild;
		while (x.nodeType!=1){
			x=x.previousSibling;//把自己变成节点，while继续向前查找
		}
		return x;
	},
	' get_previousSibling':function(elm){//elm:对象。得到上一个子元素节点
		var x=elm.previousSibling;
		while (x.nodeType!=1){
			x=x.previousSibling;//把自己变成节点，while继续向前查找
		}
		return x;
	},
	'get_nextSibling':function (elm){//elm:对象。得到下一个子元素节点
		var x=elm.nextSibling;
		while (x.nodeType!=1){
			x=x.nextSibling;
		}
		return x;
	},
//清除空白节点
	'cleanSpace':function (elm){//elm：对象。
		for(var i=0;i<elm.childNodes.length;i++){
			var node=elm.childNodes[i];
			if(node.nodeType==3&&!/\s/.test(node.nodeValue)){
				node.parentNode.removeChild(node)
			}
		}
	},
//-----------------------------------------------------------------------------------------------
//事件监听
	'addEvevt':function (obj,ev,fn){//obj：对象，ev：事件，fn：回调函数
		obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false)
	},
//-----------------------------------------------------------------------------------------------

//屏幕中心显示
	'showCenter':function (obj){
		obj.style.display="block";
		var l=(document.documentElement.clientWidth-obj.offsetWidth)/2;
		var t=(document.documentElement.clientHeight-obj.offsetHeight)/2
		obj.style.left=l+'px';
		obj.style.top=t+'px';
		window.onresize=function(){//调整屏幕尺寸也可以实现居中
			tools.showCenter(obj);
		}
	},
//-----------------------------------------------------------------------------------------------

//拖拽
	'drag':function (obj,title){
		title=title || obj;
		title.onmousedown=function(ev){
			ev=ev||window.event;

			//记录偏移 鼠标坐标--div.offsetLeft
			var disX=ev.clientX-obj.offsetLeft; //distance 距离
			var disY=ev.clientY-obj.offsetTop;


			document.onmousemove=function(ev){
				ev=ev||window.event;
				var x=ev.clientX-disX;//鼠标横坐标
				var y=ev.clientY-disY;//鼠标纵坐标

				//判断屏幕范围
				if(x<0){
					x=0;
				};
				if(y<0){
					y=0;
				};
				var screen_w=document.documentElement.clientWidth-obj.offsetWidth;
				var screen_h=document.documentElement.clientHeight-obj.offsetHeight;

				if(x>screen_w){
					x=screen_w
				};
				if(y>screen_h){
					y=screen_h
				}

				//赋值
				obj.style.left=x+'px';
				obj.style.top=y+'px';
			};
			//鼠标抬起,停止拖拽
			document.onmouseup=function(){
				document.onmousemove=null;
			};
			return false;
		};
	},
//-----------------------------------------------------------------------------------------------
//增加class
	'addClass':function (elm,newCls){
		var newClass=elm.className+' '+newCls;
		return newClass;
	},
//-----------------------------------------------------------------------------------------------
	//获得样式初值
	'getStyle':function (obj,mode){
	var value;
//        value=obj.currentStyle[mode]   支持ie8以上; value=getComputedStyle(obj,false)[mode]：   w3c
//        obj.currentStyle?value=obj.currentStyle[mode]:value=getComputedStyle(obj,false)[mode];
	if(obj.currentStyle){value=obj.currentStyle[mode]}else { value=getComputedStyle(obj,false)[mode]}
	if(mode=='opacity'){value=Math.round(parseFloat(value)*100)}else {value=parseInt(value)}
	return parseInt(value)
},
//-----------------------------------------------------------------------------------------------
//动画
	'run':function (obj,modeJson,clock,fn){//obj:对象.单位s，mode:运动模式。clock：时间。
		var speed={
			'verySlow':3,
			'slow':1.5,
			'normal':1,
			'fast':0.7,
			'veryFast':0.4
		};
		if(clock){
			if(typeof clock=='string'){clock=speed[clock]}
		}else {clock=speed.normal}
		clock=clock*1000;
		var star_width={};
		var dis={};
//遍历modeJson对象
		for(var key in modeJson){
			star_width[key]=this.getStyle(obj,key);//开始的宽度
			dis[key]=modeJson[key]-star_width[key]//移动的距离
		}

		var n=0;
		var cont=parseInt(clock/30);//时间分段
		clearInterval(obj.time);
		//使用对象的自定义属性爱存储定时器
		obj.time=setInterval(function(){
			n++;
			var a=1-n/cont;//减缓动作公式
			//多个动画类型
			for(var key2 in modeJson){
				var step_dis=star_width[key2]+dis[key2]*(1-a*a*a);//每次要移动额距离

				if(key2=='opacity'){obj.style.opacity=step_dis/100;obj.style.filter='alpha(opacity:'+step_dis+')'}
				else { obj.style[key2]=step_dis+'px';}

			}
			if(n==cont){//走完所有的阶段
				clearInterval(obj.time);
				fn&&fn()
			}
		},30)
	},
//-----------------------------------------------------------------------------------------------
//插入节点
	'insertAfter':function (newEl, targetEl){//newEl:新元素，targetEl：目标元素
		var parentEl = targetEl.parentNode;//找到父级元素
		if(this.get_lastChild(parentEl) == targetEl) parentEl.appendChild(newEl);
		else parentEl.insertBefore(newEl,this.get_nextSibling(targetEl));
	},
//-----------------------------------------------------------------------------------------------
//计算offsetTop
	'offsetTop':function (elm){
		var top = elm.offsetTop;
		var parent = elm.offsetParent;
		while( parent != null ){
			top += parent.offsetTop;
			parent = parent.offsetParent;
		};
		return top;
	},
//-----------------------------------------------------------------------------------------------
//计算offsetLeft
	'offsetLeft':function(elm){
		var left = elm.offsetLeft;
		var parent = elm.offsetParent;
		while( parent != null ){
			left += parent.offsetLeft;
			parent = parent.offsetParent;
		};
		return left;
	},
	//-----------------------------------------------------------------------------------------------

//判断上下半屏
	'halfScreen':function(elm){
		var scroll_top=document.documentElement.scrollTop || document.body.scrollTop;
		var top=this.offsetTop(elm);
		var screen_h=document.documentElement.clientHeight;
		return top<scroll_top+screen_h/2 ? true : false;
	},
	//-----------------------------------------------------------------------------------------------

//判断是否有父级
	'isParent':function (oParent,obj){
		while(obj){
			if(obj==oParent)return true;
			obj=obj.parentNode;
		}
		return false;
	},
//-----------------------------------------------------------------------------------------------
	'getByClass':function (oParent,className){

		if(document.getElementsByClassName) return oParent.getElementsByClassName(className);
		else{
			var arr=[]; //容器
			var aEl=oParent.getElementsByTagName('*');//所有标签
			for(var i=0;i<aEl.length;i++){
				if(new RegExp('\\b'+className+'\\b').test(aEl[i].className)) arr.push(aEl[i]);//向数组中添加
			}
			return arr;
		}
	},
//-----------------------------------------------------------------------------------------------
	'removeClass':function (obj,className){
		if(obj.length){
			for(var i=0; i<obj.length;i++){
				obj[i].className=obj[i].className.replace(new RegExp('\\b'+className+'\\b'),'');
			};
		}else{
			obj.className=obj.className.replace(new RegExp('\\b'+className+'\\b'),'');
		};
	}

//-----------------------------------------------------------------------------------------------
};



