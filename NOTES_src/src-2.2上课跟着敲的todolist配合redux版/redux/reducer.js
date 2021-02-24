import { ADDTODO, UPDATETODO, DELETEDOTO, CHECKTODOS, DELDONETODOS } from "./constants"

let initState = {
  todoList: [
    {
      id: 3,
      todoName: '吃饭',
      isDone: false
    },
    {
      id: 2,
      todoName: '睡觉',
      isDone: true
    },
    {
      id: 1,
      todoName: '打游戏',
      isDone: false
    },
  ]
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ADDTODO:
      const todoName = action.data
      let id = state.todoList.length > 0 ? state.todoList[0].id + 1 : 1
      let obj = {
        id,
        todoName,
        isDone: false
      }
      let newTodoList = [...state.todoList]
      newTodoList.unshift(obj)
      return {
        ...state,
        todoList: newTodoList
      }

    case UPDATETODO:
      let updateTodoList = state.todoList.map(i => {//浅层对比的原因,要直接整个state给换了,才能发现
        // 数据变了,但是你改变的是todoList对象的里面的数据,他对比的是todoList,没有发现变化
        return { ...i }//每一个对象的属性值展开放到新对象中
      })

      updateTodoList.forEach(i => {
        if (i.id === action.data) {
          i.isDone = !i.isDone
        }
      })
      return {
        ...state,
        todoList: updateTodoList
      }

    case DELETEDOTO:
      const deleteTodoList = state.todoList.filter(i => {
        return i.id !== action.data
      })
      return {
        ...state,
        todoList: deleteTodoList
      }
    case CHECKTODOS:
      let checkTodoList = state.todoList.map(i => {
        return { ...i }
      })

      checkTodoList.forEach(i => {
        i.isDone = !action.data
      })
      return {
        ...state,
        todoList: checkTodoList
      }
    case DELDONETODOS:
      const deleDoneTodoList = state.todoList.filter(i => {
        return !i.isDone
      })

      return {
        ...state,
        todoList: deleDoneTodoList
      }
    default:
      return state
  }
}