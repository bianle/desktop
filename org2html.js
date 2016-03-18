String.prototype.trim=function(){
  　　    return this.replace(/(^\s*)|(\s*$)/g, "");
  　　 };
　　 String.prototype.ltrim=function(){
  　　    return this.replace(/(^\s*)/g,"");
  　　 };
　　 String.prototype.rtrim=function(){
  　　    return this.replace(/(\s*$)/g,"");
  　　 };

(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

function readFile(f){
  var rf=require("fs");
  var data=rf.readFileSync(f,"utf-8");
  return data;
}

function org2json(data){
  var lns = data.split('\n');
  var titles = lns[0];
  var titlesArr = titles.split("|");

  var result = [];
  for(var i=2;i<lns.length;i++){
    //console.log((i+1)+ ':' +lns[i]);
    var ln = lns[i];
    var cols = ln.split('|');
    if(cols.length<=1){
      continue;
    }
    var row = '';
    var obj = {};
    for(var j=1;j<cols.length-1;j++){

      obj[titlesArr[j].trim()] = cols[j].trim();

    }
    result.push(obj);
  }
  return result;
}

var data = readFile("data.org");
var json = org2json(data);

var tmp = readFile("tmpl.tpl");
var lnks = {};
lnks['lnks']=json;
console.log(JSON.stringify(lnks));
var html = tmpl(tmp,lnks);
console.log(html);
