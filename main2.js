function getInputValue(event) {
    var name=document.getElementById("form4example1").value;
    var mail=document.getElementById("form4example3").value;
    var message=document.getElementById("form4example4").value;
    var regex1= /[a-zA-Z]/g;//regex lettre maju ou mini pour le name
    var res1=name.match(regex1);//méthode match de l'objet string si elle ne trouve pas elle renvoie null
    if(res1 ===null){
       
       alert("entrée nom invalide, veuillez entrer un nom valide");
       event.preventDefault();
    
    }else if(mail ===false){
        alert("entrée mail invalide, veuillez entrer un mail valide");
     
    }else if (message === false){
        alert("champs de message vide, veuillez écrire un message"); 
    }
};
