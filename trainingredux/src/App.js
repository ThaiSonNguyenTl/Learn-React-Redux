import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],  // id : unique , name , status 
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: '',
      sortValue: 1
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      })
    }
  }

  generateID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  
  onToggleForm = () => { 
    //add task
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      })
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm, // if true set false and false set true use ! (set truong hop phu dinh cua no)
      })
    }
   
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    })
  }
  
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onReceiveDataSubmit = (data) => {
    let { tasks } = this.state
    // add task
    if (data.id === ''){
      data.id = this.generateID()
      tasks.push(data)
    } else {
      // editing
      let index = this.findIndex(data.id)
      tasks[index] = data
    }
   
    this.setState({
      tasks: tasks,
      taskEditing: null
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  findIndex = (id) => {
    let { tasks } = this.state
    let result = -1
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index
      }
    });
    return result
  }

  onUpdateStatus = (id) => {
    let { tasks } = this.state
    let index = this.findIndex(id)
    if (index !== -1) {
      tasks[index].status = !tasks[index].status
      this.setState({
        tasks : tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  onDelete = (id) => {
    let { tasks } = this.state
    let index = this.findIndex(id)
    if (index !== -1) {
      tasks.splice(index, 1)
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    this.onCloseForm()
  }

  onUpdate = (id) => {
    let { tasks } = this.state
    let index = this.findIndex(id)
    let taskEditing = tasks[index]
    this.setState({
      taskEditing: taskEditing,
    })
    this.onShowForm() 
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus)
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword.toLowerCase(),
    })
  }

  onSort = (sortBy,sortValue) => {
    this.setState({
      sortBy:sortBy,
      sortValue:sortValue
    })
  }
  render() {
    let {
          tasks,
          isDisplayForm,
          taskEditing,
          filter,
          keyword,
          sortBy,
          sortValue
    } = this.state // let task = this.state.tasks
    
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1
        })
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task
        } else {
          return task.status === (filter.status === 1 ? true : false)
        }
      })
    }
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1
      })
    }
    if (sortBy === 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortValue
        if (a.name < b.name) return -sortValue
        else return 0
      })
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue
        if (a.status < b.status) return sortValue
        else return 0
      })
    }
    return (
      <div className="container">
        <div className ='text-center'>
            <h1>Task Management</h1>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
            {
              isDisplayForm ?
                <TaskForm
                  onCloseForm={this.onCloseForm}
                  onReceiveDataSubmit={this.onReceiveDataSubmit}
                  task = {taskEditing}
                />
                : ''
            }
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className='fas fa-plus'></span> Add Task
            </button>
           
            <Control
              onSearch={this.onSearch}
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue}
            /> &nbsp;
            <TaskList
              tasks={tasks}
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
