var choixUtilisateur = prompt(" choisissez-vous pierre,feuille,ciseaux,lezard ou spock ?");


var cap = document.getElementById("cap");


var ordiChoice = Math.random();
if( ordiChoice < 0.20){
    ordiChoice = "pierre";

} else if( ordiChoice <= 0.40 ){
	ordiChoice = "feuille";

} else if( ordiChoice <= 0.60){
	 ordiChoice = "ciseaux";

} else if (ordiChoice <= 0.80){
      ordiChoice = "lezard";

}else if(ordiChoice <= 1){
	ordiChoice ="spock";
}


var capter =  document.getElementById("capter");
 var comparer = function(choix1,choix2){
      
	if (choix1 === choix2) {

		    return "egalité !"
                                             
       }

    else if(choix1 === "pierre")
       {
 
		   if( choix2 === "ciseaux" || choix2 === "lezard")
		   {

		        return "joueur gagne!!"
		   }
		     else{
		     	    return "joueur perd!"
		     }
	   }


    else if (choix1 === "ciseaux")
       {

		       if(choix2 === "feuille" || choix2 === "lezard"){

		       	            return "joueur gagne!"
		       }
		       else {
		       	       return "joueur perd!"
		       }
		}

       else if (choix1 === "feuille")
       {
       
		       if (choix2 === "pierre" || choix2 === "spock"){

		       	             return "joueur gagne!"
		       }
		       else {
		       	      return "joueur perd!"
		       }
	    }

        else if ( choix1 === "lezard")
       {
       
		       if( choix2 === "feuille" || choix2 === "spock"){

		       	             return " joueur gagne!"
		       }
		       else {
		       	            return "joueur perd!"
		       }
		}

        else if( choix1 === "spock")
       {

		        if(choix2 === "pierre" || choix2 === "ciseaux"){

		       	                  return "joueur gagne!"
		       }
		       else{
		       	              return "joueur perd!"
		       }
		}

        
    
	};
	 
     



var compas = comparer(choixUtilisateur,ordiChoice);
capter.innerHTML = "choix de l'ordinateur: " + ordiChoice + "<br>" + "mon choix: " + choixUtilisateur +"<br>"+ compas;

