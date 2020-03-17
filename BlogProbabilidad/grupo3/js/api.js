function ajaxCall(sigma, media,start,end,id,id2){
    var settings = {
        "url": "http://localhost:3333/?sigma="+sigma+"&media="+media+"&start="+start+"&end="+end,
        "method": "POST",
        "timeout": 0,
        "datatype":"text"
      };
      
      $.ajax(settings).done(function (response) {
        $(id)[0].textContent = parseFloat(response).toFixed(4);
        $(id2)[0].textContent = parseFloat(response).toFixed(4)*100;

      }).fail(function(a,b,c){
        console.log("error retriving data");
    });
}

function fact(n) {
  f = 1;
  for (i = 1; i < n + 1; i++) { f = f * i };
  return f
}
function bin(k, n, p) {
  var ret = fact(n) / (fact(n - k) * fact(k)) * Math.pow(p, k) * Math.pow(1 - p, n - k);
  return ret;
}