menuListArray = ["Pizza Vegetariana","Pizza de Frango", "Pizza de Quatro Queijos","Pizza Portuguesa","Pizza Calabresa", "Pizza Extravaganza"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.leght;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML=htmldata;
}
function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
html=""
for(var i=0;i<menuListArray.leght;i++){
    htmldata=htmldata+imgtags+imgtags+menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML=htmldata

}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}