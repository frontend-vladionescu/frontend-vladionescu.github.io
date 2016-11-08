var fields = document.getElementsByClassName("field");

window.onload = function() {
  document.getElementById("button-about-me").className +=" button-about-me"; 
  setTimeout(function(){ document.getElementById("button-projects").className +=" button-projects" }, 300);
  setTimeout(function(){ document.getElementById("button-skills").className +=" button-skills" }, 600);
  setTimeout(function(){ document.getElementById("button-education").className +=" button-education" }, 900);
  setTimeout(function(){ document.getElementById("about-me-1").className +=" visible visible-1";}, 1200);
  setTimeout(function(){ document.getElementById("about-me-2").className +=" visible visible-2";}, 1500);  
}
  
var toggleFields = function(){
  var buttons = document.getElementsByClassName("button");
  for(var i=0; i<buttons.length; i++){
    buttons[i].onclick = function() {
      myButtonHandler.bind(this)(this.id);
    }
  }
}();

 
function myButtonHandler(id){
  if(id == "button-about-me"){
    for(var y=0; y< fields.length; y++){
      if (fields[y].id == "about-me-1"){
        fields[y].className +=" visible visible-1";
        fields[y].classList.remove("invisible");
      }else if (fields[y].id == "about-me-2"){
        fields[y].className +=" visible visible-2";
        fields[y].classList.remove("invisible");
      }else{
        fields[y].className+=" invisible"
        fields[y].classList.remove("visible");
        fields[y].classList.remove("visible-1");
        fields[y].classList.remove("visible-2");  
      }
    }
  }
  if(id == "button-projects"){
    alert
    for(var y=0; y< fields.length; y++){
      if(fields[y].id == "projects-1"){
        fields[y].className +=" visible visible-1";
        fields[y].classList.remove("invisible");
      }else if(fields[y].id == "projects-2"){
        fields[y].className +=" visible visible-2";
        fields[y].classList.remove("invisible");
      }else{
         fields[y].className+=" invisible"
         fields[y].classList.remove("visible");
         fields[y].classList.remove("visible-1");
         fields[y].classList.remove("visible-2");
         fields[y].classList.remove("visible-education-1");
      }
    }
  }
  if(id == "button-skills"){
    alert
    for(var y=0; y< fields.length; y++){
      if(fields[y].id == "skills-1"){
        fields[y].className +=" visible visible-1";
        fields[y].classList.remove("invisible");
      }else if(fields[y].id == "skills-2"){
        fields[y].className +=" visible visible-2";
        fields[y].classList.remove("invisible");
      }else{
         fields[y].className+=" invisible"
         fields[y].classList.remove("visible");
         fields[y].classList.remove("visible-1");
         fields[y].classList.remove("visible-2");
         fields[y].classList.remove("visible-education-1");
      }
    }
  }
  if(id == "button-education"){
    alert
    for(var y=0; y< fields.length; y++){
      if(fields[y].id == "education"){
        fields[y].className +=" visible visible-1";
        fields[y].classList.remove("invisible");
      }else{
         fields[y].className+=" invisible"
         fields[y].classList.remove("visible");
         fields[y].classList.remove("visible-1");
         fields[y].classList.remove("visible-2");
      }
    }
  }
}

var hoveredSkill= function(){
  var skill = document.getElementsByClassName("progressBarContainer");
  for(var i =0; i<skill.length; i++){
    skill[i].addEventListener("mouseenter", function(){
      this.className += " skill-hovered";
      this.getElementsByClassName("skill-text")[0].className = "skill-text skill-visible";  
    });
    skill[i].addEventListener("mouseleave", function(){
      this.getElementsByClassName("skill-text")[0].classList.remove("skill-visible"); 
      setTimeout( function(){
        this.classList.remove("skill-hovered");
      }.bind(this), 500);
    });  
  }
}();

var getCurrentDate = function(){
  var today = new Date();
  var month = today.getMonth() +1;
  document.getElementById("today").innerHTML = today.getDate() + " / " + month + " / " + today.getFullYear( ) + " " + today.getHours() + ":" + today.getMinutes();
}();
    
console.log("If you read this you have to hire me");    
    
  