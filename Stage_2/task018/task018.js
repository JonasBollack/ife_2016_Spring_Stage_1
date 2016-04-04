


var queue=[];
var btn=document.getElementsByTagName("button");
var data=document.getElementsByClassName("data")[0];
var content=document.getElementsByTagName("input")[0];

function renderQueue(){
	  data.innerHTML="";
	for(i in queue){
      var oli=document.createElement("li");
      oli.innerHTML=queue[i];
      oli.style.color="white";
      oli.style.backgroundColor="red";
      oli.style.height="50px";
      oli.style.width="70px";
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
      queue.unshift(insertData);
      renderQueue();
      console.log(queue);
}

function RightInsert(){
      var insertData=content.value
      queue.push(insertData);
      renderQueue();
            console.log(queue);
}
function LeftRemove(){
	  queue.splice(0,1);
	  renderQueue();
      
}

function RightRemove(){
      queue.pop();
      renderQueue();
}

function initBtnOnclick(){
		btn[0].onclick=LeftInsert;
		btn[1].onclick=RightInsert;
		btn[2].onclick=LeftRemove;
		btn[3].onclick=RightRemove;
}

function init(){
	initBtnOnclick();
}

init();

