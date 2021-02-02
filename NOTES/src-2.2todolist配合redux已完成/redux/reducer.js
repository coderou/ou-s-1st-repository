
import { ADDONE, CHANGEISDONE, DELETEONE, SELECTALL, DELETESOME } from './constants'

let initState = {
  list: [
    {
      id: 3,
      todoName: '吃鱼',
      isDone: false,
    },
    {
      id: 2,
      todoName: '吃饭',
      isDone: true,
    },
    {
      id: 1,
      todoName: '找富婆',
      isDone: false,
    },
  ]
}

export default function reducer(state = initState, action) {
  // console.log(state)
  switch (action.type) {
    case ADDONE:
      if (action.newTodoName !== undefined) {
        const { list } = state
        // console.log(list);
        let id = list.length > 0 ? list[0].id + 1 : 0
        let newListAdd = [...list]
        let obj = {
          id,
          todoName: action.newTodoName,
          isDone: false
        }
        newListAdd.unshift(obj)
        return {
          // ...state,
          list: newListAdd
        }
      }
      else {
        return {
          ...state,
          // list: newListAdd
        }
      }

    case CHANGEISDONE:
      // console.log(action.data.target.id);
      let newList = [...state.list]
      newList = newList.reduce((p, c) => {
        if (c.id === action.id) {
          p.push({
            ...c,
            isDone: !c.isDone
          })
        } else {
          p.push(c)
        }
        return p
      }, [])
      // newList.forEach(i => {
      //   // if (i.id === action.data.target.id)

      //     i.isDone = !i.isDone
      // })
      return {
        ...state,
        list: newList
      }
    case DELETEONE:
      if (action.data !== undefined) {
        const { list } = state
        let newListDeleteOne = list.filter(i => {
          return action.data !== i.id
        })
        return {
          ...state,
          list: newListDeleteOne
        }
      } else {
        return {
          ...state,
        }
      }


    case SELECTALL:
      if (action.data !== undefined) {
        const { list } = state
        let newListselectAll = [...list]
        newListselectAll.forEach(i => {
          i.isDone = action.data.target.checked
        })

        return {
          ...state,
          list: newListselectAll
        }
      } else {
        return {
          ...state,
        }
      }
    case DELETESOME:
      if (action.data !== undefined) {
        const { list } = state
        let newListdeleteSome = list.filter(i => {
          return i.isDone === false
        })
        return {
          ...state,
          list: newListdeleteSome
        }
      } else {
        return {
          ...state,
        }
      }


    default:
      return state
  }
}

/* function changeIsDone() {

  return newList
} */