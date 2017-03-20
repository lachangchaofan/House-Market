jQuery.divselect = function(divselectid,inputselectid) {
	var inputselect = $(inputselectid);
	$(divselectid+" .cite").click(function(e){
		e && e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
		var ul = $(divselectid+" ul");
		if(ul.css("display")=="none"){
			ul.css('display','inline');
		}else{
			ul.css('display','none')
		}
	});
	$(divselectid+" ul li a").click(function(){
		var txt = $(this).text();
		$(divselectid+" .cite").html(txt);
		var value = $(this).attr("selectid");
		inputselect.val(value);
		$(divselectid+" ul").hide();
		
	});
	$(document).click(function(){
		$(divselectid+" ul").hide();
	});
};