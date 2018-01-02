$(document).ready(function () {
	var element = $("#skew");
	var title = $("#title");
	var buttons = $("#buttons");
	var right = $("#right");
	var dot = $(".dots");
	$("#title").click(function() {
		$(window).scrollTop($(window).height());
	});
	$("#title .scroll").click(function() {
		$(window).scrollTop(0);
	});
	$(window).scroll(function () {
	  if($(window).scrollTop() > 0) {
	    element.addClass("scroll");
	    title.addClass("scroll");
	    buttons.hide();
	    right.hide();
	    dot.hide();
	  }
	  else {
	    element.removeClass("scroll");
	    title.removeClass("scroll");
	    buttons.show();
	    right.show();
	    dot.show();
	  }
	});
});