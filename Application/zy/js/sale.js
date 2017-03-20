/**
 * Created by hxsd on 2016/11/7.
 */
$(function(){
    $(".lou_list").find("a[class=ye]").on("click",function(){
        function loginBox(){
            var mlayer=modal_layer();//打开模态层 并且返回模态层的对象

            var loginDiv=document.createElement('div');
            loginDiv.className="loginBox";
            var html=	'<div class="din">'+
                '<div class="tit">'+
                '<h6>13栋502号房 出售价格详情</h6>'+
                '<span class="sj">数据来源：瑞峰搜商务信息服务有限公司</span>'+
                '</div>'+
                '<div id="fff" class="inner">'+

                '<dl>'+
                '<dt>建筑用房</dt>'+
                '<dd>123</dd>'+
                '</dl>'+
                '<dl>'+
                '<dt>建筑用房</dt>'+
                '<dd>123</dd>'+
                '</dl>'+
                '<dl>'+
                '<dt>建筑用房</dt>'+
                '<dd>123</dd>'+
                '</dl>'+
                '<dl>'+
                '<dt>建筑用房</dt>'+
                '<dd>123</dd>'+
                '</dl>'+
                '<dl>'+
                '<dt>建筑用房</dt>'+
                '<dd>123</dd>'+
                '</dl>'+
                '<dl>'+
                '<dt style="width: 30%;float: left;">建筑用房</dt>'+
                '<dd style="width: 70%;float: right">123</dd>'+
                '</dl>'+

                '</div>'+
                '</div>';
            loginDiv.innerHTML=html;
            document.body.appendChild(loginDiv);
            //居中显示
            tools.showCenter(loginDiv);
            var title=loginDiv.getElementsByTagName('h6')[0];
            //关闭弹框---------------------
            var closeBtn=loginDiv.getElementsByClassName('closeBtn')[0];
            mlayer.onclick=function(){
                document.body.removeChild(loginDiv);
                document.body.removeChild(mlayer);
            };

        };
        loginBox()

    });

})
