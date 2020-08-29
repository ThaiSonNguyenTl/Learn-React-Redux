import * as types from '../constants/ActionType';
import * as message from '../constants/Messages';

let initialState = message.MSG_WELCOME
const changeMessages = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGES:
            return action.message
        default: 
            return state
    }
}
export default changeMessages