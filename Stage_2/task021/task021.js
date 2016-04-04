var queue=[];
var queueTag=[];
var btn=document.getElementsByTagName("button");
var data=document.getElementsByClassName("hobby_List")[0];
var content=document.getElementsByName("input_1")[0];
var inputTag=document.getElementsByClassName("input_Tag")[0];
var inputList=document.getElementsByClassName("Tag_List")[0];
// 正则匹配,最后一个字符不能为分隔符
var regExp=/^[a-zA-z0-9\ue00-\u9fa5\b\s，,]*[^\b\s，,；;]$/;

function renderQueue(){
	data.innerHTML="";
	for(i in queue){
      var oli=document.createElement("li");
      oli.innerHTML=queue[i];
      data.appendChild(oli);
	}
}

function renderQueueTag(){
      inputList.innerHTML="";
      for(i in queueTag){
      var oli=document.createElement("li");
      oli.innerHTML=queueTag[i];
      oli.onclick=removeTag;
      oli.index=i;
      oli.onmouseover=TagMouseover;
      oli.onmouseout=TagMouseout;
      inputList.appendChild(oli);
      }
}
function removeTag(event){
      event=event||window.event;
      delete queueTag[event.target.index];
      renderQueueTag();
}

function HobbyInsert(){
      var insertData=content.value.trim();
            // 检测输入框中的符号,然后进行分割。
      var ArrayData=insertData.split(/[,，;；、\s\n]/);
      if(regExp.test(insertData)){
      queue=[];
      queue=queue.concat(ArrayData);
      renderQueue();
      }
}

function TagInsert(event){
     event=event||window.event;
     if(event.keyCode===13){
     queueTag.push(inputTag.value);
     inputTag.value="";
     renderQueueTag();
     }
}

function TagMouseover(event){
      event=event||window.event;
      event.target.innerHTML="删除";
      event.target.style.padding="0 10px";
      event.target.style.background="green";
}
function TagMouseout(event){
      event=event||window.event;
      event.target.innerHTML=queueTag[event.target.index];
      event.target.style.padding="0";
      event.target.style.backgroundColor="red";
}

function initBtnOnclick(){
	btn[0].onclick=HobbyInsert;
      inputTag.onkeydown=TagInsert;
      renderQueue();
}

function init(){
	initBtnOnclick();
}

init();