const initState = {
    count: 0,
}

export default (state = initState, action) => {
    // action = JSON.parse(JSON.stringify(action));
    console.log('initState', initState)
    const countAdd = state.count + 1;
    const countDel = state.count - 1;
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: countAdd,
            }
        case 'DECREMENT':
            return {
                ...state,
                count: countDel,
            }
        default:
            return state;
    }
}