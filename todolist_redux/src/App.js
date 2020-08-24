import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import { connect } from 'react-redux'
import * as actions from './actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      sortBy: '',
      sortValue: 1
    }
  }
  onToggleForm = () => {
    if (this.props.taskEditing && this.props.taskEditing !== null) {
      this.props.onOpenForm()
    }
    else {
      this.props.onToggleForm()
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
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
          keyword,
          sortBy,
          sortValue
    } = this.state // let task = this.state.tasks
    let {isDisplayForm} = this.props
   
    // if (keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1
    //   })
    // }
    // if (sortBy === 'name') {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sortValue
    //     if (a.name < b.name) return -sortValue
    //     else return 0
    //   })
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sortValue
    //     if (a.status < b.status) return sortValue
    //     else return 0
    //   })
    // }
    return (
      <div className="container">
        <div className ='text-center'>
            <h1>Task Management</h1>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
              <TaskForm />
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
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,// state lay tren store . gtri cua no true or false
    taskEditing: state.taskEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => dispatch(actions.toggleForm()),
    onOpenForm: () => dispatch(actions.openForm()),
    onClearTask: (task) => dispatch(actions.editTask(task))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
