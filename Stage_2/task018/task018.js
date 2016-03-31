

var a=[];
var input=document.getElementsByTagName("input")[0];
console.log(input);
a.unshift(1);
a.unshift(2);
a.unshift(3);
a.unshift(4);
a.unshift(5);
a.unshift(6);
input.value=a.pop();
console.log(a);
