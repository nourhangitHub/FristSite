// JavaScript Document

var inputName = document.getElementById('input-Name');
var inputEmail = document.getElementById('input-email');
var inputComment = document.getElementById('input-Comment');






function checkName(){
	"use strict";
	document.getElementById("name").innerHTML = "" 	;
	if(inputName.value.trim() === ""){
		document.getElementById("name").innerHTML = "please enter you name"	 ;	
		return false;
	}	
}

function checkEmail(){
	"use strict";
	 document.getElementById("email").innerHTML = ""	;
	if(inputEmail.value === ""){
	  document.getElementById("email").innerHTML = "please enter valid Email"	;	
		return false;	
}
}

function validateEmail()
      {
		  "use strict";
		  
		  document.getElementById("email").innerHTML = ""	;
         var emailID = inputEmail.value;
         var atpos = emailID.indexOf("@");
         var dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            document.getElementById("email").innerHTML = "please enter valid Email"	;
			 return false;
		 }
		  
         return( true );
      }

function checkComment(){
	"use strict";
	  document.getElementById("comment").innerHTML = ""	;
	if(inputComment.value.trim() === ""){
	  document.getElementById("comment").innerHTML = "please enter your comment"	;	
		return false;	
	}
}

function checkInput(){
	"use strict";
	checkName();
	checkEmail();
	checkComment();
	validateEmail();
}