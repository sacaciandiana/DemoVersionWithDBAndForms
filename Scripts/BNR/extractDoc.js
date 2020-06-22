function (element, input) {
  /*for(var i=0; i< document.getElementsByTagName("tr").length;i++)
  {
    if(document.getElementsByTagName("tr")[i].innerHTML.indexOf("Scurtă prezentare")!== -1)
        var tableCell = document.getElementsByTagName("tr")[i];
        tableCell.getElementsByTagName("a")[0];
  }*/




  /*for(var i=0; i< document.getElementsByTagName("tr").length;i++)
  { if(document.getElementsByTagName("tr")[i].innerText.indexOf(input)>=0)
    {
      var htmlEl = document.getElementsByTagName("tr")[i].innerHTML);
      return htmlEl;*/

      for(var i=0; i< document.getElementsByTagName("tr").length;i++)
      { if(document.getElementsByTagName("tr")[i].innerText.indexOf(input)!== -1)
           break;}
           return document.getElementsByTagName("tr")[i].innerHTML;
    }
