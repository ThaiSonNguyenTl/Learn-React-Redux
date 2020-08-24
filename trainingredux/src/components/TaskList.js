import React, { Component } from 'react'
import TaskItem from './TaskItem'
class TaskList extends Component{

    constructor(props) {
        super(props)
        this.state = {
            filterName: '',
            filterStatus: -1, // all : -1 activate: 1 deactivate: 0
        }
    }

    handleChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name]: value
        })
    }
    render() {
        let { tasks } = this.props // let tasks = this.props.tasks
        let elmTask = tasks.map((item, index) => {
            return <TaskItem
                    key={item.id}
                    index={index}
                task={item}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
                />
        })
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type='text'
                                className='form-control'
                                name='filterName'
                                value={this.state.filterName}
                                onChange={this.handleChange}
                            />
                        </td>
                        <td>
                           
                            <select
                                className="form-control"
                                name="filterStatus"
                                value={this.state.filterStatus}
                                onChange={this.handleChange}
                            >
                                <option value={-1}>All</option>
                                <option value={0}>Hidden</option>
                                <option value={1}>Activate</option>
                              </select>
                     
                        </td>
                        <td></td>
                    </tr>
                    {elmTask}
                </tbody>
            </table>
        );
    }
}
export default TaskList