//代码卡片:1.13(手写call)
Function.prototype.myCall=function(context,...arg){
  if(context===undefined||context===null){
    context=window
  }
  const type=typeof context
  switch(type){
    case 'number':
      context=new Number(context)
      break
    case 'boolean':
      context=new Boolean(context)
      break
    case 'string':
      context=new String(context)
      break
  }

  const key=Symbol()
  context[key]=this
  const res=context[key](...arg)
  delete context[key]
  return res
}

//代码卡片:1.13(手写Bind)
Function.prototype.myBind=function(context,...arg){
  return ()=> this.apply(context,arg)
}