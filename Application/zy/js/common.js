/**
 * Created by hackers267 on 16.11.8.
 */
/*通用切换*/
$('.tab-over dt').mouseover(function () {
  var dataTab = $(this).attr("data-tab");
  $(this).addClass("curr").siblings("dt").removeClass("curr");
  if (dataTab) {
    var strData = new Array();
    strData = dataTab.split(' ');
    for (var i = 0; i < strData.length; i++) {
      i == 0 ? $('#' + strData[i]).show().siblings(".tab-con").hide() : $('#' + strData[i]).show();
    }
    ;
  }
});
$('.tab-click dt').click(function () {
  var dataTab = $(this).attr("data-tab");
  $(this).addClass("curr").siblings("dt").removeClass("curr");
  if (dataTab) {
    var strData = new Array();
    strData = dataTab.split(' ');
    for (var i = 0; i < strData.length; i++) {
      i == 0 ? $('#' + strData[i]).show().siblings(".tab-con").hide() : $('#' + strData[i]).show();
    }
    ;
  }
});
/*select插件*/
(function ($) {
  function hideOptions(speed) {
    if (speed.data) {
      speed = speed.data
    }
    if ($(document).data("nowselectoptions")) {
      $($(document).data("nowselectoptions")).hide();
      $($(document).data("nowselectoptions")).prev("div").removeClass("tag-select-open");
      $(document).data("nowselectoptions" , null);
      $(document).unbind("click" , hideOptions);
      $(document).unbind("keyup" , hideOptionsOnEscKey);
    }
  }

  function hideOptionsOnEscKey(e) {
    var myEvent = e || window.event;
    var keyCode = myEvent.keyCode;
    if (keyCode == 27)hideOptions(e.data);
  }

  function showOptions(speed) {
    $(document).bind("click" , speed , hideOptions);
    $(document).bind("keyup" , speed , hideOptionsOnEscKey);
    $($(document).data("nowselectoptions")).slideDown(speed);
    $($(document).data("nowselectoptions")).prev("div").addClass("tag-select-open");
  }

  $.fn.selectStyle = function (_speed,icon) {
    $(this).each(function () {
      var speed = _speed || 0;
      icon=icon || 'fa-caret-down';
      var width = this.getAttribute("data-width") ? this.getAttribute("data-width") : 'auto';
      if ($(this).data("cssobj")) {
        $($(this).data("cssobj")).remove();
      }
      $(this).hide();
      var divselect = $("<div></div>").insertAfter(this).addClass("tag-select").css("width" , width);
      //divselect.html("111");
      $(this).data("cssobj" , divselect);
      var divoptions = $("<ul></ul>").insertAfter(divselect).addClass("tag-options").hide();
      divselect.click(function (e) {
        if ($($(document).data("nowselectoptions")).get(0) != $(this).next("ul").get(0)) {
          hideOptions(speed);
        }
        if (!$(this).next("ul").is(":visible")) {
          e.stopPropagation();
          $(document).data("nowselectoptions" , $(this).next("ul"));
          showOptions(speed);
        }
      });
      divselect.hover(function () {
          $(this).addClass("tag-select-hover");
        } , function () {
          $(this).removeClass("tag-select-hover");
        }
      );
      $(this).change(function () {
        $(this).nextAll("ul").children("li:eq(" + $(this)[0].selectedIndex + ")").addClass("open-selected").siblings().removeClass("open-selected");
        $(this).next("div").html($(this).children("option:eq(" + $(this)[0].selectedIndex + ")").text() + '<i class="fa '+icon+'"></i>');
      });
      $(this).children("option").each(function (i) {
        var lioption = $("<li></li>").html($(this).text()).attr("title" , $(this).attr("title")).appendTo(divoptions);
        if ($(this).attr("selected")) {
          lioption.addClass("open-selected");
          divselect.html($(this).text() + '<i class="fa '+icon+'"></i>');
        }
        lioption.data("option" , this);
        lioption.click(function () {
          lioption.data("option").selected = true;
          $(lioption.data("option")).trigger("change" , true)
        });
        lioption.hover(
          function () {
            $(this).addClass("open-hover");
          } ,
          function () {
            $(this).removeClass("open-hover");
          }
        );
      });
    });
  }
})(jQuery);