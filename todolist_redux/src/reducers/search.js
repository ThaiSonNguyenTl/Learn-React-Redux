import * as types from '../constants/ActionTypes'

const initialState = ''

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH: 
            return action.keyword  // return ve cai j thi tren store no se co cai do 
                                    //  o day return ve keyword thi searchTask tren store co keyword
        default: 
            return state
    }
}

export default myReducer