function (element, input) {
var table = document.getElementById("ctl00_B_Center_Lista_grdLista");
var temp =[];
for(var i = 0; i<table.querySelectorAll("[id]").length;i++) {
  var link = table.querySelectorAll("[id]")[i];
  //var linkAsString = link.outerHTML;
  //var rgx = /(?<=;">).*(?=<\/a>)/g;
  //var matchArr = rgx.exec(linkAsString);
  //if(matchArr!=input) temp.push(matchArr[0]);
  //else break;
  if(document.getElementById(link.id).innerHTML != input)
  temp.push(document.getElementById(link.id).innerHTML);
  else break;
}
  return temp;
}
