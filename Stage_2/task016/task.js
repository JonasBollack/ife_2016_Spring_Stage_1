

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
// •参考以下示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
// •用户输入的城市名必须为中英文字符，空气质量指数必须为整数
// •用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
// •用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
// •用户可以点击表格列中的“删除”按钮，删掉那一行的数据

var aqiData = {};
var city = document.getElementById('aqi-city-input');
var value = document.getElementById('aqi-value-input');
var alphaReg=/^[A-Za-z\u4E00-\u9FA5]+$/;
var numReg=/^[1-9]*$/;
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {
        var cityUpdata=city.value.trim();
        var valueUpdata=value.value.trim();
     if(!alphaReg.test(cityUpdata)){
     	alert("请输入正确的城市");
     	return false;
     }
     	if(!numReg.test(valueUpdata)){	
     		alert("请输入正确的整数");
     		return false;
     	}
     		aqiData[cityUpdata]=valueUpdata;
     		return;
     	}
     

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table=document.getElementById("aqi-table");
      var str="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
      for(var i in aqiData){
      	str+="<tr><td>"+i+"</td><td>"+aqiData[i]+"</td><td><button onclick="+"delBtnHandle()"+">删除</button></td></tr>";
      }
     table.innerHTML=str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
  // do sth.
  event=event||window.event;
  if(event.stopPropagation){
  	event.stopPropagation;
  }else {e.cancelBubble=true}
  var city=event.target.parentNode.parentNode.firstChild.innerHTML;
  for(i in aqiData){
    if(city==i)
      delete aqiData[i];
  }
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById('add-btn').addEventListener('click',addBtnHandle);

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById('aqi-table').addEventListener('click',delBtnHandle);
}

init();

