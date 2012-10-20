        var sidebarEnabled = true;
function setEnabledSidebar(shouldEnable) {
            sidebarEnabled = shouldEnable;
        }
$(document).ready(function(){
    

        
        
	timerId = setInterval(function () {
      $("#sidebar").css({marginLeft:"-183px"})
	  $("#nav-login").hide();
    }, 0);
	$("#nav-active").mouseover(function(){
               if( !$("#sidebar").is(':animated') && sidebarEnabled) {
                    $("#sidebar").animate({marginLeft:"0px"});
                    $("#nav-login").fadeIn();
                    clearInterval(timerId);
                }
	});
	$("#sidebar").mouseleave(function(){
		$("#nav-login").fadeOut();	
		$(this).animate({marginLeft:"-183px"});
	});
	$("#nav-library").mouseover(function(){
		$("#nav-active").animate({marginTop:"-460px"},20);
	});
	$("#nav-my").mouseover(function(){
		$("#nav-active").animate({marginTop:"-425px"},20);
	});
	$("#nav-friends").mouseover(function(){
		$("#nav-active").animate({marginTop:"-390px"},20);
	});
	$("#nav-setting").mouseover(function(){
		$("#nav-active").animate({marginTop:"-355px"},20);
	});
	$("#nav-know").mouseover(function(){
		$("#nav-active").animate({marginTop:"-295px"},20);
	});
	$("#nav-blog").mouseover(function(){
		$("#nav-active").animate({marginTop:"-260px"},20);
	});
	$("#nav-facebook").mouseover(function(){
		$("#nav-active").animate({marginTop:"-225px"},20);
	});
	$("#nav-language").mouseover(function(){
		$("#nav-active").animate({marginTop:"-222px"},20);
	});
	$("#nav-know-unlogin").mouseover(function(){
		$("#nav-active").animate({marginTop:"-400px"},20);
	});
	$("#nav-blog-unlogin").mouseover(function(){
		$("#nav-active").animate({marginTop:"-365px"},20);
	});
	$("#nav-facebook-unlogin").mouseover(function(){
		$("#nav-active").animate({marginTop:"-330px"},20);
	});
	var moveNum = 0;
	$("#nextpanel").click(function(){
            moveNum++;
	});

	//input欄位焦點切換
	$('input[type="text"]').addClass("idleField");
    $('input[type="text"]').focus(function() {
		$(this).removeClass("idleField").addClass("focusField");
    	if (this.value == this.defaultValue){ 
    		this.value = '';
		}
		if(this.value != this.defaultValue){
	    	this.select();
	    }
    });
	$('input[type="text"]').blur(function() {
    	$(this).removeClass("focusField").addClass("idleField");
    	if ($.trim(this.value) == ''){
			this.value = (this.defaultValue ? this.defaultValue : '');
		}
    });
	$('.pic-title form input').focus(function() {
		$(this).removeClass("idleField").addClass("focusField");
    	if (this.value == this.defaultValue){ 
    		this.value = this.defaultValue;
		}
		if(this.value != this.defaultValue){
	    	this.select();
	    }
   	});
	$('.pic-title .spot-clear a').click(function(){
		$('.pic-title form input').val("");
	});
});
