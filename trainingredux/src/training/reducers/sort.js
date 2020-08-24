const initialState = {
    by: 'name',
    value: 1
}

const myReducer = (state = initialState, action) => {
    if (action === 'SORT') {
        let { by, value } = action.sort
        return {by, value}
    }
    return state
}

export default myReducer