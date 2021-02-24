import { ADDTODO, UPDATETODO, DELETEDOTO, CHECKTODOS,DELDONETODOS } from './constants';

export function addtodo(data) {
  return { type: ADDTODO, data }
}
export function updataTodo(data) {
  return { type: UPDATETODO, data }
}
export function deleteTodo(data) {
  return { type: DELETEDOTO, data }
}
export function checkTodos(data) {
  return { type: CHECKTODOS, data }
}
export function deldoneTodos() {
  return { type: DELDONETODOS }
}