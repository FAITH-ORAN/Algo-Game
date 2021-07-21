/*-----------------Faiza Berrichi----------------*/
/*-----------------Date:01/04/2021----------------*/
/*-----------------Version:01/01----------------*/
function displayName (event){
    var inputVal = document.getElementById("name").value;
    var div =document.getElementById("modal1");
    if(inputVal == false){
        alert("veuillez entrer un nom svp!");
        event.preventDefault();
        
    }else{
    div.innerHTML =" Bienvenue " + inputVal+" à Algo-Game" + 
    "<br>Tester vos connaissances en algorithmie" + 
    "<br> 1-vous choisissez une catégorie" + 
    "<br> 2-vous repondez aux questions on choisissant la bonne réponse" +
    "<br>Bonne chance " + inputVal+ "<br><button class='btn btn-primary ' type='button'><a style='color:white;'  href=\"index1.html\">Niveau 1</a></button>"
    + "  <button class='btn btn-primary ' type='button'><a style='color:white;'  href=\"indexF.html\">Niveau 2</a></button>" + 
    "  <button class='btn btn-primary ' type='button'><a style='color:white;'  href=\"indexC.html\">Niveau 3</a></button>" ; 
}}

