function move() {
  var x = document.getElementById("search_img");
  var y = document.getElementById("search_bar");
  var z=document.getElementById("hide");
  var q=document.getElementById("hide1");
  var wid = 0;
  var anim = setInterval(frame, 2);
  x.style.height = "55%";
  if (window.innerWidth<=319){
    q.style.display="none";
  }
  if (window.innerWidth<=455){
    z.style.display="none";
  }
  function frame() {
    y.style.display = "inline";
    if (wid == 170 && window.innerWidth>=730) {
      clearInterval(anim);
    } 
    else if (wid == 74 && window.innerWidth<=385){
      clearInterval(anim);
    }
    else if (wid == 100 && window.innerWidth<750){
      clearInterval(anim);
    }
    else {
      wid += 2;
      y.style.width = wid + "px";
    }
  }
}

function move1() {
  var x = document.getElementById("search_img");
  var y = document.getElementById("search_bar");
  var q=document.getElementById("hide1");
  var z=document.getElementById("hide");
  var wid = y.offsetWidth;
  var anim = setInterval(frame, 2);
  x.style.height = "50%";
  function frame() {
    if (wid == 0) {
      y.style.display = "none";
      z.style.display="inline";
      q.style.display="inline";
      clearInterval(anim);
    } else {
      wid -= 2;
      y.style.width = wid + "px";
    }
  }
}

function j(){
  var x=document.getElementById("images");
  var add=document.querySelectorAll("#images img");
  var screen_pos=x.getBoundingClientRect();
  var res=window.innerHeight;
  if (res>=661){
    if (res-screen_pos.top>=300 && res-screen_pos.top<500){
      for (var i=0; i<add.length; i++)
      {
        add[i].classList.add("moves");
      }
    }
    else if (res-screen_pos.top<5 || res-screen_pos.top>=1100){
      for (var i=0; i<add.length; i++)
      {
        add[i].classList.remove("moves");
      }
    }
  }
  else if (res>=461 && res<661){
    if (res-screen_pos.top>=200 && res-screen_pos.top<400){
      for (var i=0; i<add.length; i++)
      {
        add[i].classList.add("moves");
      }
    }
    else if (res-screen_pos.top<5 || res-screen_pos.top>=1000){
      for (var i=0; i<add.length; i++)
      {
        add[i].classList.remove("moves");
      }
    }
  }
  else{
    if (res-screen_pos.top>=50 && res-screen_pos.top<250){
      for (var i=0; i<add.length; i++)
      {
          add[i].classList.add("moves");
      }
    }
    else if (res-screen_pos.top<5 || res-screen_pos.top>=850){
      for (var i=0; i<add.length; i++)
      {
        add[i].classList.remove("moves");
      }
    }
  }
}
