import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../actions'
class TaskForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id:'',
      name: '',
      status: false,
    }
  }

  closeForm = () => {
    this.props.onCloseForm()
  }
  onHandleChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name] : value,
    })
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state)
    // clear form and close form 
    this.onClear()
    this.closeForm()
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
    this.closeForm()
  }
// khi component taskForm dc goi( khi btn edit dc nhan vao) thi life circle dc goi va chi goi 1 lan
  componentWillMount() {
    if (this.props.taskEditing) {
      this.setState({
        id: this.props.taskEditing.id,
        name: this.props.taskEditing.name,
        status: this.props.taskEditing.status
      })
    } else {
      this.onClear()
    }
    
  }
// su dung khi form no mo len roi va minh van bam vao sua vi componentwillmount no chi chay 1 lan khi form chua mo len
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    if (nextProps && nextProps.taskEditing) {
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        status: nextProps.taskEditing.status
      })
    } else if (!nextProps.taskEditing) {
      this.onClear()
    }     
    
  }
  render() {
    
    if(!this.props.isDisplayForm) return null
    return (
      <div className="card">
        <div className="card-header bg-warning"> { !this.state.id  ?  'Add Task' :'Update Task'} 
         <span className='far fa-times-circle float-right' onClick = {this.closeForm}></span>
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                required
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onHandleChange}
              />
            </div>

            <label>Status</label>
            <select
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.onHandleChange}
            >
              <option value={true}>Activate</option>
              <option value={false}>Deactivate</option>
            </select>
            <br />
                <div className='text-center'>
                    <button type="submit" className="fa fa-save mr-5 btn btn-primary"> Save</button>
              <button
                type="button"
                className="far fa-times-circle mr-5 btn btn-danger"
                onClick={this.onClear}
              >
                Cancel</button>
                </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskEditing : state.taskEditing,
    isDisplayForm : state.isDisplayForm
  }   
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => dispatch(actions.saveTask(task)),
    onCloseForm: () => dispatch(actions.closeForm()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm)