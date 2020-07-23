var slideindex=0;
var flag=false;
var slidearry=document.getElementsByClassName("slide");

changeslide(slideindex);

function changeslide(index){
  if(flag){
    if(index>0){
      animateleft2right1(slideindex);
    }else{
      animateright2left1(slideindex)
    }
    setTimeout(function(){
      slidearry[slideindex].style.display="none";
      slideindex+=index;
      if(slideindex>=2){
        slideindex=0;
        slidearry[0].style.display="block";
      }else if(slideindex<=-1){
        slideindex=1;
        slidearry[1].style.display="block";
      }else{
        slidearry[slideindex].style.display="block";
      }
      if(flag){
          if(index>0){
            animateleft2right2(slideindex);
          }else{
            animateright2left2(slideindex)
          }
      }
    },300);
  }else{
    slidearry[slideindex].style.display="block";
    flag=true;
  }
}

function animateleft2right1(slideindex){
  slidearry[slideindex].style.animationName="l2r1";
}

function animateleft2right2(slideindex){
  slidearry[slideindex].style.animationName="l2r2";
  setTimeout(function(){}, 1000);
}


function animateright2left1(slideindex){
  slidearry[slideindex].style.animationName="r2l1";
}

function animateright2left2(slideindex){
  slidearry[slideindex].style.animationName="r2l2";
}
