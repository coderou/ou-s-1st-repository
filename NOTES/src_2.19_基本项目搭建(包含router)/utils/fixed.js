// 实现移动端适配的代码

// 方式1
function adapter() {
  const fontSize = (document.documentElement.clientWidth * 100) / 375;
  document.documentElement.style.fontSize = fontSize + "px";
}
adapter();
window.onresize = adapter;

//  方式2
/* function adapter() {
  const fontSize = document.documentElement.clientWidth * 10;
  document.documentElement.style.fontSize = fontSize + "px";
}
adapter();
window.onresize = adapter; */
