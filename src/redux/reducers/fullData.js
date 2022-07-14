const init_state = {
    tab: "",
    id: 0,
}

const reducer = (state = init_state, action) => {
    switch(action.type) {
        case "GET_POSITION":
            return {...state, tab: action.data, id: action.id}
        default:
            return state
    }
}

export default reducer;