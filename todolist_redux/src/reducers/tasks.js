import * as types from "../constants/ActionTypes";

let data = JSON.parse(localStorage.getItem("tasks"));

let initialState = data ? data : [];

const generateID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};
let id = ''
let index = -1
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.SAVE_TASK:
      let task = {
        id: action.task.id,  //id = '' or co value
        name: action.task.name,
        status: action.task.status === 'true' ? true : false
      };
      if (!task.id) {
        task.id = generateID()
        state.push(task);
      } else {
        index = findIndex(state, task.id)
        state[index] = task
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS_TASK:
      id = action.id;
      index = findIndex(state, id);
      // let cloneTask = { ...state[index] };
      // cloneTask.status = !cloneTask.status // khai bao bang let cho phep cap nhat gia tri nhg ko cho phep khai bao lai 
      // state[index] = cloneTask
      state[index] = {
        ...state[index],
        status: !state[index].status
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      // console.log(action)
      id = action.id
      index = findIndex(state, id)
      state.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(state))
      return [...state]
      
    default:
      return state;
  }
};
export default myReducer;
