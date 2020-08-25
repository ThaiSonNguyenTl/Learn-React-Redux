import { combineReducers } from 'redux'
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing'
import filterTable from './filterTable'
import searchTask from './search';
import sortTask from './sort';
const myReducer = combineReducers({
    tasks,// tasks : tasks
    isDisplayForm,
    taskEditing,
    filterTable,
    searchTask,
    sortTask
})

export default myReducer