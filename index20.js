   function myAgeFunction(){
       alert("Hello world");
    var x =prompt("When were you born ? ");

    var myAge = (2021 - x);

  
  if (x>=1900 && x <=2021) {
    alert("You are now "+ myAge+" year(s) old");
  }

    else if(x =="")
    {
     alert("Please enter your year of birth and try again");
     return null;  //terminates it.
    }

    else{
      alert("Invalid input, please enter valid year and try again");
    }

    
   }