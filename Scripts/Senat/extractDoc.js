function (element, input) {
var actionTable = document.getElementsByClassName("display responsive-table legislative-procedure-table")[0];
var docPath;
     for(var i = 0; i<actionTable.getElementsByTagName("a").length;i++)
      {
        if(actionTable.getElementsByTagName("a")[i].hasAttribute("id"))
        {
          var link = actionTable.getElementsByTagName("a")[i].id;
          if(document.getElementById(link).innerText.indexOf("Ordonanţa Guvernului") >= 0)
          {
            docPath = document.getElementById(link).getAttribute("href");
            break;
          }
        }
      }
      if(docPath == undefined)
      for(var i = 0; i<actionTable.getElementsByTagName("a").length;i++)
       {
         if(actionTable.getElementsByTagName("a")[i].hasAttribute("id"))
         {
         var link = actionTable.getElementsByTagName("a")[i].id;
         if(document.getElementById(link).innerText.indexOf("forma ") >= 0)
         {
           docPath = document.getElementById(link).getAttribute("href");
           break;
         }
       }
      }
       return docPath;
     }
