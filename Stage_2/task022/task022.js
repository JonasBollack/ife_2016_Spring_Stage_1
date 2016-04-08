



var div=document.getElementsByTagName("div");
var btn=document.getElementsByTagName("button");
var reserve=[];
var interval=null;

function renderDiv(){
	var i=0;
	interval=setInterval(renderBlue,1000);
	function renderBlue(){
		if(i<reserve.length){
			reserve[i].style.backgroundColor="blue";
			if(i>=1){
			reserve[i-1].style.backgroundColor="#fff";
			}
			i++;
		}else{			
			    reserve[reserve.length-1].style.backgroundColor="#fff";
				clearInterval(interval);
		}
	}
}

function preOrder(node){
    reserve.push(node);
    if(node.firstChild){
    preOrder(node.firstElementChild);
    }
    if(node.lastChild){
    preOrder(node.lastElementChild);
    }
    console.log(reserve);
}

function inOrder(node){
	if(node.firstChild){
	inOrder(node.firstElementChild);
    }
	reserve.push(node);
    if(node.lastChild){
	inOrder(node.lastElementChild);
	}
}

function postOrder(node){
	if(node.firstChild){
	postOrder(node.firstElementChild);
	}
    if(node.lastChild){
    postOrder(node.lastElementChild);
    }
    reserve.push(node);
}

function init(){
	btn[0].onclick=function(){
		reserve=[];
		preOrder(div[0]);
	    renderDiv();
	};
	btn[1].onclick=function(){
		reserve=[];
		inOrder(div[0]);
	    renderDiv();
	};
	btn[2].onclick=function(){
		reserve=[];
		postOrder(div[0]);
	    renderDiv();
	};
}

init();