window.onload = function () {
    //check that js is working
    console.log("reading js");


    //define process function
    function processForm() {

    
	

    //store first plural noun in a variable
    var pluralNoun = document.f.pluralNoun.value;
    //store 
    
    console.log(pluralNoun);

	 //store first verb in a variable
    var verb = document.f.verb.value;
    //store 
	
	 //store adjective in a variable
    var adjective = document.f.adjective.value;
    //store 
        
    //store verb-ing in a variable
    var gerund = document.f.gerund.value;
    //store 
        
     //store noun in a variable
    var noun = document.f.noun.value;
    //store 
	
    //error detection
    if (pluralNoun == "" || verb == "" || adjective == "" || gerund == "" || noun == "") {
      alert("I've never wanted more, until you didn't finish the form.");

    } else {

	//capture the msg element to change its text and html
      var myMsg = document.getElementById("myMsg");


	  myMsg.innerHTML = "His " + pluralNoun + " part, like he's taking a sharp intake of breath, and he " + verb + ". For a fraction of a second, he looks " + adjective + " somehow, and the Earth shifts slightly on its axis, the tectonic plates  " + gerund + " into a new " + noun + ".";
      myMsg.className = "show";
	}
  
 //prevent page from reloading
    return false;
}
  

    //capture the submit event
    document.f.onsubmit = processForm;
	
  
  //if user chooses "reset"
  function resetPage() {
    //remove any text from myMsg
    myMsg.innerHTML = "";
    //change the class name
    myMsg.className = "hide";
    //reset the plural noun field
    pluralNoun.value = "";
    //reset the verb field
    verb.value = "";
	//reset the adjective field
    adjective.value = "";
	//reset the second verb field
    gerund.value = "";
	//reset the second noun field
    noun.value = "";
	
	


	  //capture the reset event
  document.f.onreset = resetPage;

   
   
}
}

