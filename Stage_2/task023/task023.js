



var odiv=document.getElementsByTagName("div");
var obtn=document.getElementsByTagName("button");
var oinput=document.getElementsByTagName("input")[0];
var odata=[];


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
	if(oinput.value==""){
		alert("请输入数字");
		return false;
	}
    odata=[];
    odata.push(odiv[0]);
	BFT(odiv[0]);
    Search(oinput.value);
}

function Search(data){
	var i=0;
	var interval=setInterval(function(){
		if(i<odata.length){
		odata[i].style.backgroundColor="red";
		if(odata[i].dataset.num==data){
			odata[i].style.backgroundColor="green";
			if(i>0)
			odata[i-1].style.backgroundColor="#fff";
			clearInterval(interval);
			return true;
		}
		if(i>0)
			odata[i-1].style.backgroundColor="#fff";
		i++;
	}else{
  		odata[i-1].style.backgroundColor="#fff";
		alert("您想要查找的数不存在多叉树中");
		clearInterval(interval);
		return false;
	}
    },500);
}


// 渲染图表
function renderChart(data){
	var i=0;
	var interval=setInterval(function(){
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

// function oreplace(data){
//     var ragExp=/\s+$/;
//     data.replace(ragExp,"");
//     return data;
// }

// 设置初始化属性
function init(){
	addEventHandler(obtn[0],"click",oDFT);
	addEventHandler(obtn[1],"click",oBFT);
	addEventHandler(obtn[2],"click",oSearch);
	console.log(odiv[0].firstChild);
	console.log(odiv[0].dataset.num);

}

// 解决浏览器兼容性函数
function addEventHandler(obj,event,handler){
	if(obj.attachEvent){
		obj.attachEvent("on"+event,handler);
	}else if(obj.addEventListener){
		obj.addEventListener(event,handler,false);
	}else
	    obj["on"+click]=handler;
}

init();