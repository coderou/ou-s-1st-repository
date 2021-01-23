/* const PENDING = 'pending'//初始未确定的状态
const RESOLVED = 'resolved'//成功的状态
const REJECTED = 'rejected'//失败的状态


// 构造函数练习:
function Promise(excutor) {
  const _this = this//缓存this
  _this.status = undeifned//将 promise的状态保存在promise实例的status中
  _this.data = undefined//将promise的结果数据初始值保存在_this.data中
  _this.callbacks = []//保存需要执行的回调函数,new Promise ((res,rej)=>{}),中有excutor执行器,而执行器有有2个函数,这2个函数就保存在callbacks这个数组中

  function res(value) {//静态方法(成功),当实例对象调用res(value)的时候就是在调用这个,注意,下面已经将这2个方法传递给了excutor,所以在实例调用是可以找到的
    //因为prommise只能改变一次状态,所以在每次调用res之前,都要判断能否改变,即当_this.status的状态为Pending时候,直接弹出
    if (_this.status !== PENDING) return

    _this.status = RESOLVED//改变状态为成功
    _this.data = value//放数据

    // 在res被调用的时候,需要将callsback中的函数一一拿出来异步调用
    if(_this.callbacks.length){
      setTimeout(() => {
        _this.callbacks.forEach(fn=>{
          fn.onResolved(value)
        }) 
      });
    }


  }

  function rej(reason) {
    _this.status = REJECTED
    _this.data = value
  }

  //在newprmise的时候执行excutor,如果执行器出错,promise失败,即直接reject,并且吧error传递下去
  try {
    excutor(res, rej)//调用excutor并且传入上面定义的静态方法
  } catch (error) {
    rej(error)
  }
} */



// 练习2:Promise.prototype.then方法
// 几种情况:
Promise.prototype.then=function(){
  onResolved=typeof onResolved==='function'?onResolved:value=>value
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }//这里实际上是将错误reason向下传递

  const _this=this
  return new Promise((res,rej)=>{
    
  })


















}
