// 自定义Promse模块(ES5)
; (function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  // Promise构造函数
  function Promise(excutor) {
    const _this = this
    _this.status = PENDING
    _this.data = undefined
    _this.callbacks = []//[{onResolve(){},onRejected(){}}]

    //将promise的状态改为成功,指定成功的value
    function resolve(value) {
      if (_this.status !== PENDING) return
      _this.status = RESOLVED
      _this.data = value

      //异步调用所有缓存的待执行的成功的回调函数
      if (_this.callbacks.length > 0) {//可不写>0
        //启动一个延迟时间为0的定时器,在定时器的回调中执行所有成功的回调
        setTimeout(() => {//原生实现不是settimeout,而是微任务队列
          _this.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value)//有闭包
          })
        })
      }
    }
    //将promise的状态改为失败,指定失败的reason
    function reject(reason) {
      //如果当前不是pending,直接结束
      if (_this.status !== PENDING) return

      _this.status = REJECTED//将状态给为失败
      _this.data = reason//保存reason数据

      //异步调用所有缓存的待执行的失败的回调函数
      if (_this.callbacks.length > 0) {//可不写>0
        //启动一个延迟时间为0的定时器,在定时器的回调中执行所有失败的回调
        setTimeout(() => {//原生实现不是settimeout,而是微任务队列
          _this.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason)//有闭包
          })
        });
      }
    }

    //调用excutor来启动异步任务
    try {
      excutor(resolve, reject)
    } catch (error) {//执行器执行出错,当前promise变为失败
      console.log('-----------')
      reject(error)
    }
  }

  /* 
  1.用来指定成功/失败回调函数的方法
    1.1).如果当前promise是resolved,异步执行成功的回调onResolved
    1.2).如果当前promise是rejected,异步执行成功的回调onRjected
    1.3).如果当前promise是pending,保存回调函数
  2.返回一个新的promise对象 
    它的结果状态由onResolved或者onRejected执行的结果决定
    2.1).抛出error ==> 变为rejected,结果值为error
    2.2).返回值不是promise ==> 变为resolved,结果值为返回值
    2.3).返回值是promise ==> 由这个promise的值决定新的promise的结果(成功/失败)
  */
  //  promise实例的then方法
  Promise.prototype.then = function (onResolved, onRejected) {
    onResolved = typeof onRejected === 'function' ? onRejected : value => value//将成功的值向下传递
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }//这里实际上是将错误reason向下传递


    const _this = this//promise对象
    // 返回一个新的promise对象
    return new Promise((resolve, reject) => {
      // 1.调用指定的回调函数callback
      // 2.根据callback()执行的结果来更新返回的then()promise的状态
      function handle(callback) {
        try {
          const result = callback(_this.data)
          if (result instanceof Promise) {// 2.3).返回值是promise ==> 由这个promise的值决定新的promise的结果(成功/失败)
            result.then(//取回调函数返回的promise的结果
              value => resolve(value),
              reason => reject(reason)
            )
            // result.then(resolve,reject)//和上面3条的结果是一样的//这里即是取的函数也是改的函数

            // 解析:
            // 类似:
            // function fn(event){}
            // div.onclick=function(event){fn(event)}
            // 简化:
            // div.onlick=fn
          } else {//2.2).返回值不是promise ==> 变为resolved,结果值为返回值
            resolve(result)
          }

        } catch (error) {// 2.1).抛出error ==> 变为rejected,结果值为error
          reject(error)
        }
      }


      if (_this.status == RESOLVED) {
        setTimeout(() => {
          handle(onResolved)//如果当前回调函数已经成功了,异步执行这个回调函数,并且根据结果更新上面promise的状态
        }, 0);

      } else if (_this.status == REJECTED) {
        setTimeout(() => {
          handle(onRejected)
        }, 0);

      } else {//PENDING
        _this.callbacks.push({//不是直接保存成功/失败的回调,而是保存包含了回调函数调用的函数,即将来resolve(),先执行我定义的函数,而我的函数中来调用handle()//为什么不直接调用?因为根据调用的结果来更新上面promise的状态,如果直接调用,没有机会更新 
          onResolved(value) {//这个方法在push的对象内部,要通过对象.方法调用//在后面调用resolve()中执行
            // onResolved(value)//注意,不是递归调用,而是找这个变量,找变量沿着作用域找(对象不是函数作用域),一直找到最外面的onResolved,另外,不需要加settimtout异步调用,因为外面的onResolved是异步执行的
            handle(onResolved)
          },
          onRejected(reason) {//这里没有使用reason,因为可以通过_this获取reason和value
            handle(onRejected)
          }
        })
      }
    })

    /* //保存回调函数
    this.callbacks.push({//将2个回调函数以对象的形式保存到promise对象上
      onResolved,
      onRejected
    }) */
  }

  // 用来指定失败回调函数的方法// 即catch是then的语法糖
  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }

  // 用来返回一个指定value的成功的promise  
  Promise.resolve = function (value) { }
  // 用来返回一个指定reason的失败的promise  
  Promise.reject = function (reason) { }
  // 返回一个promise,只有当数组中所有promise都成功才成功,否则失败//promises代表一个promise的数组
  Promise.all = function (promises) { }
  // 返回一个promise,由第一个完成的promise决定
  Promise.race = function (promises) { }
  //向外暴露Promise
  window.Promise = Promise
})(window)