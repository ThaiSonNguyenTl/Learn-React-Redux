import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
class TaskItem extends Component{

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id) //dispatch(actions.deleteTask())
        this.props.onCloseForm()
    }
    onUpdate = () => {
        this.props.onOpenForm()
        this.props.onEditTask(this.props.task) // this.props.task nhan o ben TaskList
    }
    render() {
        let {index, task} = this.props
        return (
            <tr>
                <td>
                    {index + 1}
                </td>
                <td>{task.name}</td>
                <td className='text-center'>
                    <span className={task.status === true ? 'badge badge-success' : 'badge badge-danger'}
                            onClick = {this.onUpdateStatus}
                    >
                        {task.status === true ? 'Activate' : 'Deactivate'}
                    </span>
                </td>

                <td className='text-center'>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdate}
                    >
                        <span className='fas fa-pencil-alt'></span> Edit
                    </button> &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className='fa fa-trash'></span> Delete
                    </button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => dispatch(actions.updateStatusTask(id)),
        onDelete: (id) => dispatch(actions.deleteTask(id)),
        onCloseForm: () => dispatch(actions.closeForm()),
        onOpenForm: () => dispatch(actions.openForm()),
        onEditTask: (task) => dispatch(actions.editTask(task))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem)