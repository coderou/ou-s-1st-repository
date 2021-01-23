//代码卡片:1.13(手写防抖)
function debounce(fn,time){
  let timer=null
  return function(){
    clearTimeout(timer)
    const arg=arguments
    timer=setTimeout(()=>{
      fn.call(this,arg)  
    },time)
  }
}

//代码卡片:1.13(手写节流)
function throttle(fn,time){
  let lastTime=0
  return function(){
    const nowTime=Date.now()
    if(nowTime-lastTime<time){return}
    lastTime=nowTime
    fn.call(this,arguments[0])
  }
}


