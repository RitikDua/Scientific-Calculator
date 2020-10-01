$(document).ready(function(){
    //$("h1").text($(".screen").val());
      
      $(".d").click(function(){
          var a =$(this).val();
        $(".screen").val($(".screen").val() +a);
      });
    
    $(".o").click(function(){
          var b =$(this).val();
        $(".screen").val($(".screen").val() +b);
      });
    
    $(".clear").click(function(){
        $(".screen").val(null);
      });
    
    $("#equal").click(function(){
        $(".screen").val(eval($(".screen").val()));
      });
    
    $("#sin").click(function(){
        $(".screen").val(Math.sin($(".screen").val()));
      });
    
    $("#tan").click(function(){
        $(".screen").val(Math.tan($(".screen").val()));
      });
    
    $("#cos").click(function(){
        $(".screen").val(Math.cos($(".screen").val()));
      });
    
    $("#log").click(function(){
        $(".screen").val(Math.log($(".screen").val()));
      });
    
    $("#sqrt").click(function(){
        $(".screen").val(Math.sqrt($(".screen").val(),2));
      });
    
    $("#pie").click(function(){
       a=$(".screen").val();
    $(".screen").val(eval(a*3.14));
      });
    
    $("#pow").click(function(){
       a=$(".screen").val();
    $(".screen").val(eval(a*a));
      });
    
    
    $("#back").click(function(){
    var num=$(".screen").val();
       num=num.substring(0, num.length-1);
    $(".screen").val(num);
      });
    
    });
    