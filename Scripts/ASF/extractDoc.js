function (element, input) {
  var divEl = document.getElementById("sp-component");
  var pEl = divEl.getElementsByTagName("p")[0];
  var docPath = pEl.getElementsByTagName("a")[0].getAttribute("href");
  return docPath;
}
