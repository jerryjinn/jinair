$(function(){
  /*
  @Evnet:사이즈 감지 이벤트
  */
  var i = 0;
  $(window).on("resize",function(){
    var b = $("body");
    var w = $(window).width();
    if( w >= 1024){
      $("#gnb").attr("style","");
      //$(".dim_gnb").attr("style","");
      b.attr("class","");
      b.addClass("pc");

    } else if(w >= 480 && w < 1024){
      b.attr("class","");
      b.addClass("tablet");
    } else{
      b.attr("class","");
      b.addClass("mobile");
    }   
  });
  /*반응형 GNB*/
  $.fn.rsGnb = function(opt){
    var mode = opt.mode;
    var ts = $(this);
    if(mode == "pc tablet"){
      var selector = "#"+ts.attr("id")+">ul>li>a" + ",.tablet"+" #"+ts.attr("id")+">ul>li>a";
      $(document).on("mouseover focus",selector,function(){
        var myThis = $(this);
        $(this).closest("ul").find("ul:visible").hide()
        .end().find("a.on").removeClass("on");
        myThis.next().show();
        $(this).addClass("on");
      });
      var selector2 = "#"+ts.attr("id")+",.tablet"+" #"+ts.attr("id");
      $(document).on("mouseleave", selector2, function(){
        $("ul",this).find("ul:visible").hide()
        .end().find("a.on").removeClass("on");
      });
    }
    $(document).on("click",".ico_f_show_gnb",function(){
      $("#gnb").animate({right:0},500);
      $(".dim_gnb").fadeIn("fast");
    });
    $(document).on("click",".mobile_gnb_close",function(){
      $("#gnb").animate({right:"-500px"},500);
      $(".dim_gnb").fadeOut("fast");
    });
  }
  $(function(){
      $(window).resize();
      $("#gnb").rsGnb({mode:"pc tablet"});
    });

  /*로그인, LANGUAGE 창 열리기*/
  $("#util_menu a.register").on("click",function(){
   var myReply = $(this).closest("#header_top").next();
   console.log(myReply);
   if (myReply.is(":hidden")){
     $("#util_menu ul li .register").removeClass("on");
     $(this).addClass("on");
     $(".sign_in:visible").slideUp("fast");
     myReply.slideDown("fast");
   } else{
     $("#util_menu ul li .register").removeClass("on");
     $(".sign_in:visible").slideUp("fast");
   }
  });
});
