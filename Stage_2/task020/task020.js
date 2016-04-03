var queue=["张三","李四","王二麻子","大头","老干妈"];
var btn=document.getElementsByTagName("button");
var data=document.getElementsByClassName("data")[0];
var content=document.getElementsByName("input_1")[0];
// 正则匹配,最后一个字符不能为分隔符
var regExp=/^[a-zA-z0-9\ue00-\u9fa5\b\s，,]*[^\b\s，,]$/;

function renderQueue(){
	data.innerHTML="";
	for(i in queue){
      var oli=document.createElement("li");
      oli.innerHTML=queue[i];
      oli.style.color="white";
      oli.style.backgroundColor="red";
      oli.style.height="50px";
      // oli.style.width="70px";
      oli.style.display="inline-block";
      oli.style.textAlign="center";
      oli.style.lineHeight="50px";
      oli.style.fontSize="20px";
      oli.style.margin="10px";
      oli.style.borderRadius="10px";
      oli.style.fontWeight="bold";
      data.appendChild(oli);
	}

}

function LeftInsert(){
	var insertData=content.value;
      // 检测输入框中的符号,然后进行分割。
      var ArrayData=insertData.split(",");
      if(ArrayData.length==1){
            var ArrayData=insertData.split("\n");
            if(ArrayData.length==1){
                  var ArrayData=insertData.split("，");
                  if(ArrayData.length==1){
                        var ArrayData=insertData.split(" ");
                        if(ArrayData.length==1){
                              var ArrayData=insertData.split(";");
                        }
                  }
            }
      }
      if(regExp.test(insertData)){
      queue=ArrayData.concat(queue);
      // queue.unshift(insertData);
      renderQueue();
      console.log(queue);
      }
}

function RightInsert(){
      var insertData=content.value
            // 检测输入框中的符号,然后进行分割。
      var ArrayData=insertData.split(",");
      if(ArrayData.length==1){
            var ArrayData=insertData.split("\n");
            if(ArrayData.length==1){
                  var ArrayData=insertData.split("，");
                  if(ArrayData.length==1){
                        var ArrayData=insertData.split(" ");
                        if(ArrayData.length==1){
                              var ArrayData=insertData.split(";");
                        }
                  }
            }
      }
      if(regExp.test(insertData)){
      queue=queue.concat(ArrayData);
      // queue.push(insertData);
      renderQueue();
      console.log(queue);
      }
}
function LeftRemove(){
	queue.splice(0,1);
	renderQueue();
      
}

function RightRemove(){
      queue.pop();
      renderQueue();
}

function Search(){
      var rearchText=document.getElementsByName("searchText")[0].value;
      var testRegExp=/rearchText/;
      if(testRegExp.test(queue[0])){
            alert("1");
            renderQueue();
      }
}

function initBtnOnclick(){
		btn[0].onclick=LeftInsert;
		btn[1].onclick=RightInsert;
		btn[2].onclick=LeftRemove;
		btn[3].onclick=RightRemove;
            btn[4].onclick=Search;
            renderQueue();
}

function init(){
	initBtnOnclick();
}

init();