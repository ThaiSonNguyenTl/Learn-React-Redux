import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux';
import * as actions from '../actions'
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
        this.props.onFilterTable(
            {
                name: name === 'filterName' ? value : this.state.filterName,
                status: name === 'filterStatus' ? value : this.state.filterStatus
            }
        )
        this.setState({
            [name]: value
        })
    }
    render() {
        let { tasks, filterTable, keyword ,sort} = this.props // let tasks = this.props.tasks lay o store
        // filter table
        if (filterTable) {
            if (filterTable.name) {
              tasks = tasks.filter((task) => task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1 )
            }
            tasks = tasks.filter((task) => {
              if (filterTable.status === -1) {
                return task
              } else {
                return task.status === (filterTable.status === 1 ? true : false)
              }
            })
        }
        
        // search task
        if (keyword) {
            tasks = tasks.filter((task) => task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
        }
        
        // sort task
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
              if (a.name > b.name) return sort.value
              if (a.name < b.name) return -sort.value
              else return 0
            })
          } else {
            tasks.sort((a, b) => {
              if (a.status > b.status) return -sort.value
              if (a.status < b.status) return sort.value
              else return 0
            })
          }
        let elmTask = tasks.map((task, index) => {
            return <TaskItem
                    key={task.id}
                    index={index}
                    task={task}
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

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.searchTask,
        sort : state.sortTask

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable : (filter) => dispatch(actions.filterTable(filter))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskList)