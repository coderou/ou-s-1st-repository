let initState = { count: 0, name: '你的名字', sex: '男' }//创建一个初始化数据

function reducer(state = initState, action) {//定义reducer函数
  switch (action.type) {//固定写法
    case 'INCREMENT'://如果是增加
      return {//返回一个对象
        ...state,//解构state
        count: state.count + action.data//count更新
      }
    default:
      return state
  }
}


export default reducer