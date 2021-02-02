import { ADDONE, CHANGEISDONE, DELETEONE, SELECTALL, DELETESOME } from './constants';

function addOne(e) {
  // console.log(e)
  if (e.keyCode === 13 && e.target.value !== '') {
    let newTodoName = e.target.value
    return { type: ADDONE, e, newTodoName }
  }
  return { type: ADDONE, e }
}

function changeIsDone(id) {
  // console.log(id);
  return { type: CHANGEISDONE, id }
}


function deleteOne(data) {
  // console.log(data);
  return { type: DELETEONE, data }
}

function selectAll(data) {
  // console.log(data);
  return { type: SELECTALL, data }
}

function deleteSome(data) {
  console.log(data);
  return { type: DELETESOME, data }
}

export { addOne, changeIsDone, deleteOne, selectAll, deleteSome } 