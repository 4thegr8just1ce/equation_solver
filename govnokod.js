$(document).ready(function(){
    $('.button').click(function(){
      var a=0,b=0,c=0,d=0;
      a = $('#a').val();
      b = $('#b').val();
      c = $('#c').val();
      if(a == 0 || b == 0 || c == 0)$(".answer").html('Empty fields');
      else if (isNaN( $("#a").val())){
        $(".answer").html('A is not a number');
      }
        else if (isNaN( $("#b").val())){
        $(".answer").html('B is not a number');
      }
        else if (isNaN( $("#c").val())){
        $(".answer").html('C is not a number');
      }
      else{
        d = b*b-4*a*c;
        console.log('D=' + d);
        if (d<0){
          $(".answer").html('Error');
        }
        else if (d==0){
          $(".answer").html('X=' + ((-1)*b + Math.sqrt(d))/(2*a));
        }
        else{
          $(".answer").html('X1=' + ((-1)*b + Math.sqrt(d))/(2*a)+', X2=' + ((-1)*b - Math.sqrt(d))/(2*a));
        }
        a=0;b=0;c=0;d=0;
      }
    });
});
