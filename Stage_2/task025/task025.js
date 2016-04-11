



var odiv=document.getElementsByClassName("div");
var obtn=document.getElementsByTagName("button");
var oinput=document.getElementsByTagName("input");
var odata=[];
var interval=null;
// 记录当前选择的节点
var oselect={
	num:-1
}

// 设置选择的Div为红色
// function oSelect(event){
// 	if(event.target.nodeName=="DIV"){
//     odata=[];
// 	DFT(odiv[0]);
// 	odata.push(odiv[0]);
//     event=event||window.event;
//     for(i in odata)
// 		odata[i].style.backgroundColor="#fff";
//     console.log(event.target.dataset.num);
//     oselect.num=event.target.dataset.num;
//     event.target.style.backgroundColor="red";
//     }
 
// }

// 添加节点的函数。
function oAddElement(event){
    event=event||window.event;
    odata=[];
	DFT(odiv[0]);
	odata.push(odiv[0]);
    var tempData=prompt("请输入创建文件夹的名字");
    if(tempData){
	            var udiv=document.createElement("div");
	            udiv.setAttribute("class","div");
	            udiv.innerHTML="<button class='glyphicon glyphicon-folder-close' onmouseover='omouseover()' onclick='oclick()'>"+tempData+"</button><span><button onclick='oAddElement()'>添加</button><button onclick='oDeleteElement()'>删除</button></span>";
	            udiv.setAttribute("dataNum",tempData);
	            udiv.dataset.num=tempData;
	            event.target.parentNode.parentNode.appendChild(udiv);
				event.target.parentNode.parentNode.getElementsByTagName("button")[0].setAttribute("class","glyphicon glyphicon-folder-open");
	}
}

// 删除节点的函数。
function oDeleteElement(event){
    event=event||window.event;
    odata=[];
	DFT(odiv[0]);
	odata.push(odiv[0]);
    oselect.num=event.target.parentNode.parentNode.dataset.num;
    if(event.target.parentNode.parentNode.parentNode.children.length==3)
		event.target.parentNode.parentNode.parentNode.getElementsByTagName("button")[0].setAttribute("class","glyphicon glyphicon-folder-close");
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
}


// 深度优先遍历算法
function oDFT(){
    odata=[];
	DFT(odiv[0]);
	odata.push(odiv[0]);
    renderChart();
}

function DFT(node){
    if(node.children){
        // for(i in node.children){
        // 不能用for in循环~会出奇怪的属性加入到数组里。
        for(var i=0;i<node.children.length;i++){
    	        DFT(node.children[i]);
    	    	odata.push(node.children[i]);
    	}
    	// }
    }
}

// 广度优先遍历算法
function oBFT(){
    odata=[];
    odata.push(odiv[0]);
	BFT(odiv[0]);
    renderChart();
}

function BFT(node){
    if(node.children){
        // for(i in node.children){
        // 不能用for in循环~会出奇怪的属性加入到数组里。
        for(var i=0;i<node.children.length;i++){
    	odata.push(node.children[i]);
    	}
    	for(var i=0;i<node.children.length;i++){
    	BFT(node.children[i]);
    	}
    	// }
    }
}

// 查找算法。
function oSearch(event){
	event=event||window.event;
	if(oinput[0].value==""){
		alert("请输入要查找的文本");
		return false;
	}
    odata=[];
    odata.push(odiv[0]);
	BFT(odiv[0]);
    Search(oinput[0].value);
}

function Search(data){
    for (var i = 0; i < odata.length; i++) {
    	odata[i].style.color="black";
    }
	for(i in odata){
		if(odata[i].dataset.num==data){
	    odata[i].firstElementChild.style.color="red";
    	for(j in odata[i].children){
    	if(j>1)
        odata[i].children[j].style.display="block";
        }
	    return true;
		}
	}
	    alert("您想要查找的数不存在目录中中");
}


// 渲染图表
function renderChart(data){
	var i=0;
    clearInterval(interval);
    for(j in odata)
    odata[j].style.backgroundColor="#fff";
	interval=setInterval(function(){
		if(i<odata.length){
		odata[i].style.backgroundColor="red";
		if(i>0)
			odata[i-1].style.backgroundColor="#fff";
		i++;
	}else{
		clearInterval(interval);
		odata[i-1].style.backgroundColor="#fff";
	}
    },500);
}

function omouseover(event){
	event=event||window.event;
	var temp=document.getElementsByTagName("span");
	for(var i=0;i<temp.length;i++)
	temp[i].style.display="none";
    event.target.parentNode.getElementsByTagName("span")[0].style.display="block";

}

var oclickData=1;
function oclick(event){
	event=event||window.event;
    if(oclickData==1){
    	console.log(event.target.parentNode.children);
    	for(i in event.target.parentNode.children){
    	if(i>1)
        event.target.parentNode.children[i].style.display="none";
        oclickData=0;
        }
    }else
    if(oclickData==0){
    	for(i in event.target.parentNode.children){
    	if(i>1)
        event.target.parentNode.children[i].style.display="block";
        oclickData=1;
        }
    }
}


// 设置初始化属性
function init(){
	// addEventHandler(obtn[0],"click",oDFT);
	// addEventHandler(obtn[1],"click",oBFT);
	addEventHandler(document.getElementById("searchBtn"),"click",oSearch);
	// addEventHandler(odiv[0],"click",oSelect);
    addEventHandler(document.getElementById("addBtn"),"click",oAddElement);
    addEventHandler(document.getElementById("delBtn"),"click",oDeleteElement);
    for(i in odiv){
    	addEventHandler(odiv[i].firstElementChild,"click",oclick);
    	addEventHandler(odiv[i].firstElementChild,"mouseover",omouseover);
    	}

}


// 解决浏览器兼容性函数
function addEventHandler(obj,event,handler){
	if(obj.addEventListener){
		obj.addEventListener(event,handler,false);
	}else if(obj.attachEvent){
		obj.attachEvent("on"+event,handler);
	}else
	    obj["on"+event]=handler;
}

init();