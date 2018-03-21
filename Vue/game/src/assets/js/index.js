

$(document).on("click",".btn-sideMenu",function () {
	if ($("body").hasClass("open-lottery")) {
		$("body").removeClass("open-lottery")
	} else{
		$("body").addClass("open-lottery")
	}
})

$(document).on("mouseover",".J-a-menu",function (e) {
	stopPropagation(e)
	if ($("body").hasClass("open-menu")) {
		$("body").removeClass("open-menu")
	} else{
		$("body").addClass("open-menu")
	}
})



$(document).on("click","body",function (e) {

	$("body").removeClass("open-menu")

})
$(document).on("click",".navlist",function (e) {
	stopPropagation(e)
})


function stopPropagation(e) {
    e = e || window.event;
    if(e.stopPropagation) { //W3C阻止冒泡方法
        e.stopPropagation();
    } else {
        e.cancelBubble = true; //IE阻止冒泡方法
    }
}


$(function () {
	$("body").addClass("open-lottery")
	//tab 切换
	$(".J-nav-tab").each(function () {
		var tthis=$(this)
		$(this).find("a").click(function() {
			var $this = $(this);
			var $obj = $this.attr("href");
			tthis.find("a").removeClass("active")
			$this.addClass("active");
			$($obj).show().siblings().hide()
			return false;
		})
	})

})

  




