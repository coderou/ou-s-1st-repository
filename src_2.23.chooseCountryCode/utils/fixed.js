// 实现移动端适配(采用方式1)
function adapter() {
  const fontSize = (document.documentElement.clientWidth * 100) / 375;
  document.documentElement.style.fontSize = fontSize + "px";
}
adapter();
window.onresize = adapter;
