/**
 * Created by hxsd on 2016/11/9.
 */
$(function(){
    var cont='<div class="info_r">'+
        '<div class="about">关于我们</div>'+
        '<div class="about_bg"><img src="images/about_09.jpg"></div>'+
        '<p>一.友链交换声明</p>'+
        '<p>优房超是集房源信息搜素 ,产品研发，大数据处理，服务标准建立为一体的国内领先且重度垂直的全产业链房产服务 平台。链家网主<br>'+
        '域与旗下所有子点诚挚希望跟房地产，家居，装修，物业，建筑，综合信息，大型论坛，分类信息，导航等网站交换友<br>'+
        '情链接。</p>'+
        '<br>'+
        '<br>'+
        '<br>'+
        '<p class="maring_tp">二 友情链接申请步骤</p>'+
        '<p>1.  请在贵网站按以上方式做好Q房网的友情链接；</p>'+
        '<p>2.  做好链接后语，请在右侧填写申请信息；</p>'+
        '<p>3.  已经开通我站友情链接且内容健康，符合本站友情链接要求的网站，经Q房网管理员审核后，可以显示在友情链接页面；</p>'+
        '<p>4.  如果您有更多的疑问或者问题，您也可以拨打我们的联系电话：0755-23944123，QQ：2105983457,2056313332</p> '+
        '</div>';
    $(".info_r").html(cont)
    $(".info_l ul li:eq(0) span").addClass("a11");
    $(".info_l ul li:eq(1) span").addClass("a21");
    $(".info_l ul li:eq(2) span").addClass("a31");
    $(".info_l ul li:eq(3) span").addClass("a41");
    $(".info_l ul li:eq(4) span").addClass("a51");
    $(".info_l ul li:eq(5) span").addClass("a61");
    $(".info_l ul li").on("click",click);
    function click(){
        $(".info_l ul li:eq(0) span").removeClass("a12");
        $(".info_l ul li:eq(1) span").removeClass("a22");
        $(".info_l ul li:eq(2) span").removeClass("a32");
        $(".info_l ul li:eq(3) span").removeClass("a42");
        $(".info_l ul li:eq(4) span").removeClass("a52");
        $(".info_l ul li:eq(5) span").removeClass("a62");
        var index=$(".info_l ul li").index(this);
        $(this).find("span").addClass("a"+(index+1)+"2");
        $(".info_l ul li").css({"background":"#fff"});
        $(this).css({"background":"#fc7a18"});
        console.log(index);
        if(index==0){
            $(".info_r").html(cont);
            return
        }
        $(".info_r").html(index+1)
    }
})
