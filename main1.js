/*----------------Faiza Berrichi
version :01.01.01
date:04-2021
*/
var count = 0;//variable qui va me servir à compter le nombre de clique
var victory=0;//à mettre dans a bonne réponse et à incrémenter
function getAnswers() {//fonction est apliquée dans un onclick dans html si 

 //quiz n°1   
var incorect1 = document.getElementById("ab");
document.getElementById("ab").style.backgroundColor="red";
document.getElementById("ab").innerHTML="Mauvaise réponse";
count++;
}
function getAnswerss() {
var incorect2= document.getElementById("ad");
document.getElementById("ad").style.backgroundColor="red";
document.getElementById("ad").innerHTML="Mauvaise réponse";
count++;
}
function getAnswer_1() {
var incorect3 = document.getElementById("ae");
document.getElementById("ae").style.backgroundColor="red";
document.getElementById("ae").innerHTML="Mauvaise réponse";
count++;
}
function getAnswer_2() {
var corect = document.getElementById("ac");
document.getElementById("ac").style.backgroundColor="green";
document.getElementById("ac").innerHTML="Bonne réponse";
count++;
victory++;
 }
 //quiz n°2
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
btn1.addEventListener("click",getAnswer_3);//application de addEventLestner directement dans Js
btn2.addEventListener("click",getAnswer_4);
btn3.addEventListener("click",getAnswer_5);
btn4.addEventListener("click",getAnswer_6);
function getAnswer_3() {
    btn1.style.backgroundColor="green";
    btn1.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_4() {
    btn2.style.backgroundColor="red";
    btn2.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_5() {
    btn3.style.backgroundColor="red";
    btn3.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_6() {
    btn4.style.backgroundColor="red";
    btn4.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°3
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
btn5.addEventListener("click",getAnswer_7);
btn6.addEventListener("click",getAnswer_8);
btn7.addEventListener("click",getAnswer_9);
btn8.addEventListener("click",getAnswer_10);
function getAnswer_7() {
    btn5.style.backgroundColor="green";
    btn5.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_8() {
    btn6.style.backgroundColor="red";
    btn6.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_9() {
    btn7.style.backgroundColor="red";
    btn7.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_10() {
    btn8.style.backgroundColor="red";
    btn8.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°4
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
btn9.addEventListener("click",getAnswer_11);
btn10.addEventListener("click",getAnswer_12);
btn11.addEventListener("click",getAnswer_13);
btn12.addEventListener("click",getAnswer_14);
function getAnswer_11() {
    btn9.style.backgroundColor="red";
    btn9.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_12() {
    btn10.style.backgroundColor="red";
    btn10.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_13() {
    btn11.style.backgroundColor="green";
    btn11.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_14() {
    btn12.style.backgroundColor="red";
    btn12.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°5
var btn13 = document.getElementById("btn13");
var btn14 = document.getElementById("btn14");
var btn15 = document.getElementById("btn15");
var btn16 = document.getElementById("btn16");
btn13.addEventListener("click",getAnswer_15);
btn14.addEventListener("click",getAnswer_16);
btn15.addEventListener("click",getAnswer_17);
btn16.addEventListener("click",getAnswer_18);
function getAnswer_15() {
    btn13.style.backgroundColor="red";
    btn13.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_16() {
    btn14.style.backgroundColor="red";
    btn14.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_17() {
    btn15.style.backgroundColor="red";
    btn15.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_18() {
    btn16.style.backgroundColor="green";
    btn16.innerHTML="Bonne réponse";
    count++;
    victory++;
}
//quiz n°6
var btn17 = document.getElementById("btn17");
var btn18 = document.getElementById("btn18");
var btn19 = document.getElementById("btn19");
var btn20 = document.getElementById("btn20");
btn17.addEventListener("click",getAnswer_19);
btn18.addEventListener("click",getAnswer_20);
btn19.addEventListener("click",getAnswer_21);
btn20.addEventListener("click",getAnswer_22);
function getAnswer_19() {
    btn17.style.backgroundColor="red";
    btn17.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_20() {
    btn18.style.backgroundColor="green";
    btn18.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_21() {
    btn19.style.backgroundColor="red";
    btn19.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_22() {
    btn20.style.backgroundColor="red";
    btn20.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°7
var btn21 = document.getElementById("btn21");
var btn22 = document.getElementById("btn22");
var btn23 = document.getElementById("btn23");
var btn24 = document.getElementById("btn24");
btn21.addEventListener("click",getAnswer_23);
btn22.addEventListener("click",getAnswer_24);
btn23.addEventListener("click",getAnswer_25);
btn24.addEventListener("click",getAnswer_26);
function getAnswer_23() {
    btn21.style.backgroundColor="green";
    btn21.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_24() {
    btn22.style.backgroundColor="red";
    btn22.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_25() {
    btn23.style.backgroundColor="red";
    btn23.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_26() {
    btn24.style.backgroundColor="red";
    btn24.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°8
var btn25 = document.getElementById("btn25");
var btn26 = document.getElementById("btn26");
var btn27 = document.getElementById("btn27");
var btn28 = document.getElementById("btn28");
btn25.addEventListener("click",getAnswer_27);
btn26.addEventListener("click",getAnswer_28);
btn27.addEventListener("click",getAnswer_29);
btn28.addEventListener("click",getAnswer_30);
function getAnswer_27() {
    btn25.style.backgroundColor="red";
    btn25.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_28() {
    btn26.style.backgroundColor="red";
    btn26.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_29() {
    btn27.style.backgroundColor="red";
    btn27.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_30() {
    btn28.style.backgroundColor="green";
    btn28.innerHTML="Bonne réponse";
    count++;
    victory++;
}
//quiz n°9
var btn29 = document.getElementById("btn29");
var btn30 = document.getElementById("btn30");
var btn31 = document.getElementById("btn31");
var btn32 = document.getElementById("btn32");
btn29.addEventListener("click",getAnswer_31);
btn30.addEventListener("click",getAnswer_32);
btn31.addEventListener("click",getAnswer_33);
btn32.addEventListener("click",getAnswer_34);
function getAnswer_31() {
    btn29.style.backgroundColor="red";
    btn29.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_32() {
    btn30.style.backgroundColor="red";
    btn30.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_33() {
    btn31.style.backgroundColor="green";
    btn31.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_34() {
    btn32.style.backgroundColor="red";
    btn32.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°10
var btn33 = document.getElementById("btn33");
var btn34 = document.getElementById("btn34");
var btn35 = document.getElementById("btn35");
var btn36 = document.getElementById("btn36");
btn33.addEventListener("click",getAnswer_35);
btn34.addEventListener("click",getAnswer_36);
btn35.addEventListener("click",getAnswer_37);
btn36.addEventListener("click",getAnswer_38);
function getAnswer_35() {
    btn33.style.backgroundColor="red";
    btn33.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_36() {
    btn34.style.backgroundColor="red";
    btn34.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_37() {
    btn35.style.backgroundColor="green";
    btn35.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_38() {
    btn36.style.backgroundColor="red";
    btn36.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°11
var btn37 = document.getElementById("btn37");
var btn38 = document.getElementById("btn38");
var btn39 = document.getElementById("btn39");
var btn40 = document.getElementById("btn40");
btn37.addEventListener("click",getAnswer_39);
btn38.addEventListener("click",getAnswer_40);
btn39.addEventListener("click",getAnswer_41);
btn40.addEventListener("click",getAnswer_42);
function getAnswer_39() {
    btn37.style.backgroundColor="red";
    btn37.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_40() {
    btn38.style.backgroundColor="red";
    btn38.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_41() {
    btn39.style.backgroundColor="green";
    btn39.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_42() {
    btn40.style.backgroundColor="red";
    btn40.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°12
var btn41 = document.getElementById("btn41");
var btn42 = document.getElementById("btn42");
var btn43 = document.getElementById("btn43");
var btn44 = document.getElementById("btn44");
btn41.addEventListener("click",getAnswer_43);
btn42.addEventListener("click",getAnswer_44);
btn43.addEventListener("click",getAnswer_45);
btn44.addEventListener("click",getAnswer_46);
function getAnswer_43() {
    btn41.style.backgroundColor="red";
    btn41.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_44() {
    btn42.style.backgroundColor="green";
    btn42.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_45() {
    btn43.style.backgroundColor="red";
    btn43.innerHTML="Bonne réponse";
    count++;
}
function getAnswer_46() {
    btn44.style.backgroundColor="red";
    btn44.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°13
var btn45 = document.getElementById("btn45");
var btn46 = document.getElementById("btn46");
var btn47 = document.getElementById("btn47");
var btn48 = document.getElementById("btn48");
btn45.addEventListener("click",getAnswer_47);
btn46.addEventListener("click",getAnswer_48);
btn47.addEventListener("click",getAnswer_49);
btn48.addEventListener("click",getAnswer_50);
function getAnswer_47() {
    btn45.style.backgroundColor="green";
    btn45.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_48() {
    btn46.style.backgroundColor="red";
    btn46.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_49() {
    btn47.style.backgroundColor="red";
    btn47.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_50() {
    btn48.style.backgroundColor="red";
    btn48.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°14
var btn49 = document.getElementById("btn49");
var btn50 = document.getElementById("btn50");
var btn51 = document.getElementById("btn51");
var btn52 = document.getElementById("btn52");
btn49.addEventListener("click",getAnswer_51);
btn50.addEventListener("click",getAnswer_52);
btn51.addEventListener("click",getAnswer_53);
btn52.addEventListener("click",getAnswer_54);
function getAnswer_51() {
    btn49.style.backgroundColor="red";
    btn49.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_52() {
    btn50.style.backgroundColor="red";
    btn50.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_53() {
    btn51.style.backgroundColor="green";
    btn51.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_54() {
    btn52.style.backgroundColor="red";
    btn52.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°15
var btn53 = document.getElementById("btn53");
var btn54 = document.getElementById("btn54");
var btn55 = document.getElementById("btn55");
var btn56 = document.getElementById("btn56");
btn53.addEventListener("click",getAnswer_55);
btn54.addEventListener("click",getAnswer_56);
btn55.addEventListener("click",getAnswer_57);
btn56.addEventListener("click",getAnswer_58);
function getAnswer_55() {
    btn53.style.backgroundColor="red";
    btn53.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_56() {
    btn54.style.backgroundColor="green";
    btn54.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_57() {
    btn55.style.backgroundColor="red";
    btn55.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_58() {
    btn56.style.backgroundColor="red";
    btn56.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°16
var btn57 = document.getElementById("btn57");
var btn58 = document.getElementById("btn58");
var btn59 = document.getElementById("btn59");
var btn60 = document.getElementById("btn60");
btn57.addEventListener("click",getAnswer_59);
btn58.addEventListener("click",getAnswer_60);
btn59.addEventListener("click",getAnswer_61);
btn60.addEventListener("click",getAnswer_62);
function getAnswer_59() {
    btn57.style.backgroundColor="red";
    btn57.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_60() {
    btn58.style.backgroundColor="red";
    btn58.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_61() {
    btn59.style.backgroundColor="red";
    btn59.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_62() {
    btn60.style.backgroundColor="green";
    btn60.innerHTML="Bonne réponse";
    count++;
    victory++;
}
//quiz n°17
var btn61 = document.getElementById("btn61");
var btn62 = document.getElementById("btn62");
var btn63 = document.getElementById("btn63");
var btn64 = document.getElementById("btn64");
btn61.addEventListener("click",getAnswer_63);
btn62.addEventListener("click",getAnswer_64);
btn63.addEventListener("click",getAnswer_65);
btn64.addEventListener("click",getAnswer_66);
function getAnswer_63() {
    btn61.style.backgroundColor="green";
    btn61.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_64() {
    btn62.style.backgroundColor="red";
    btn62.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_65() {
    btn63.style.backgroundColor="red";
    btn63.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_66() {
    btn64.style.backgroundColor="red";
    btn64.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°18
var btn65 = document.getElementById("btn65");
var btn66 = document.getElementById("btn66");
var btn67 = document.getElementById("btn67");
var btn68 = document.getElementById("btn68");
btn65.addEventListener("click",getAnswer_rec);
btn66.addEventListener("click",getAnswer_68);
btn67.addEventListener("click",getAnswer_69);
btn68.addEventListener("click",getAnswer_70);
function getAnswer_rec() {
    btn65.style.backgroundColor="red";
    btn65.innerHTML="Mauvaise réponse";
    count++;
    
}
function getAnswer_68() {
    btn66.style.backgroundColor="green";
    btn66.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_69() {
    btn67.style.backgroundColor="red";
    btn67.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_70() {
    btn68.style.backgroundColor="red";
    btn68.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°19
var btn69 = document.getElementById("btn69");
var btn70 = document.getElementById("btn70");
var btn71 = document.getElementById("btn71");
var btn72 = document.getElementById("btn72");
btn69.addEventListener("click",getAnswer_71);
btn70.addEventListener("click",getAnswer_72);
btn71.addEventListener("click",getAnswer_73);
btn72.addEventListener("click",getAnswer_74);
function getAnswer_71() {
    btn69.style.backgroundColor="red";
    btn69.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_72() {
    btn70.style.backgroundColor="green";
    btn70.innerHTML="Bonne réponse";
    count++;
    victory++;
}
function getAnswer_73() {
    btn71.style.backgroundColor="red";
    btn71.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_74() {
    btn72.style.backgroundColor="red";
    btn72.innerHTML="Mauvaise réponse";
    count++;
}
//quiz n°20
var btn73 = document.getElementById("btn73");
var btn74 = document.getElementById("btn74");
var btn75 = document.getElementById("btn75");
var btn76 = document.getElementById("btn76");
btn73.addEventListener("click",getAnswer_75);
btn74.addEventListener("click",getAnswer_76);
btn75.addEventListener("click",getAnswer_77);
btn76.addEventListener("click",getAnswer_78);
function getAnswer_75() {
    btn73.style.backgroundColor="red";
    btn73.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_76() {
    btn74.style.backgroundColor="red";
    btn74.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_77() {
    btn75.style.backgroundColor="red";
    btn75.innerHTML="Mauvaise réponse";
    count++;
}
function getAnswer_78() {
    btn76.style.backgroundColor="green";
    btn76.innerHTML="Bonne réponse";
    count++;
    victory++;
}


//partie boutton score

var btnScore=document.getElementById("score");
var showResult=document.getElementById("faith");
btnScore.addEventListener("click",getScore);
function getScore() {
    showResult.innerHTML="le pourcentage de reussite dans le niveau 1 est : "+"<strong>"+ victory*100/count+"%"+"</strong>";
     

}


