import React, { Component } from "react";

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
    let value = target.value
    if (name === 'status') {
       value =  target.value === 'true'? true: false
    }
    this.setState({
      [name] : value,
    })
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onReceiveDataSubmit(this.state)
    // clear form and close form 
    this.onClear()
    this.closeForm()
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }
// khi component taskForm dc goi( khi btn edit dc nhan vao) thi life circle dc goi va chi goi 1 lan
  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      })
    }
    
  }
// su dung khi form no mo len roi va minh van bam vao sua vi componentwillmount no chi chay 1 lan khi form chua mo len
  componentWillReceiveProps(props) {
    if (props && props.task) {
      this.setState({
        id: props.task.id,
        name: props.task.name,
        status: props.task.status
      })
    } else if (!props.task) {
      this.setState({
        id: '',
        name: '',
        status: false
      })
    }       // console.log(props)
    
  }
  render() {
    let { id } = this.state
    
    return (
      <div className="card">
        <div className="card-header bg-warning"> { id !== '' ? 'Update Task' : 'Add Task'} 
         <span className='far fa-times-circle float-right' onClick = {this.closeForm}></span>
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
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
export default TaskForm