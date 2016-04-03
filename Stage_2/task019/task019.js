


var queue=[34,14,84,64,52,43,94,75];   //储蓄渲染列表的数值
var btn=document.getElementsByTagName("button");
var data=document.getElementsByClassName("data")[0];
var content=document.getElementsByTagName("input")[0];
var regExp=/^([1-9][0-9]|100)$/;  //正则表达式表示10-100的数
var chart=document.getElementsByClassName("chart")[0];

// 渲染列表
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
// 渲染图表
function renderChart(){
      chart.innerHTML="";
      for(i in queue){
      var oli=document.createElement("li");
      oli.style.backgroundColor="red";
      oli.style.height=queue[i]*4+"px";
      oli.style.width="20px";
      oli.setAttribute("title",queue[i]);
      chart.appendChild(oli);
      }
}
function QuickSorto(){
      QuickSort(queue,0,queue.length-1);
      renderChart();
      renderQueue();
}
// 快速排序
function QuickSort(a,left,right){
      var i,j;
      var swap;
      if(left<right){
            i=left;j=right+1;
            do{
                  do i++;while(a[i]<a[left]);
                  do j--;while(a[j]>a[left]);
                  if(i<j){
                        swap=a[j];
                        a[j]=a[i];
                        a[i]=swap;
                  }
            }while (i<j);
            swap=a[j];
            a[j]=a[left];
            a[left]=swap;
            QuickSort(a,left,j-1);
            QuickSort(a,j+1,right);
            console.log(a);
      }
}


// 左插入函数
function LeftInsert(){
	var insertData=content.value.trim();
      if(!regExp.test(insertData)){
            alert("请输入10-100之内的数字");
      }else{
            if(queue.length>=60)
                  alert("队列元素大于60,请删除元素后重试。")
            else{
                  queue.unshift(insertData);
                  renderQueue();
                  renderChart();
            }
      }
}

// 右插入函数
function RightInsert(){
      var insertData=content.value.trim();
      if(!regExp.test(insertData)){
            alert("请输入10-100之内的数字");
      }else{
            if(queue.length>=60)
                  alert("队列元素大于60,请删除元素后重试。")
            else{
                  queue.push(insertData);
                  renderQueue();
                  renderChart();
            }
      }
}

// 删除左元素函数
function LeftRemove(){
	  queue.splice(0,1);
	  renderQueue();
        renderChart();
      
}

// 删除右元素函数
function RightRemove(){
      queue.pop();
      renderQueue();
      renderChart();
}

function initBtnOnclick(){
		btn[0].onclick=LeftInsert;
		btn[1].onclick=RightInsert;
		btn[2].onclick=LeftRemove;
		btn[3].onclick=RightRemove;
            btn[4].onclick=QuickSorto;
}

function init(){
	initBtnOnclick();
      renderQueue();
      renderChart();
}

init();

