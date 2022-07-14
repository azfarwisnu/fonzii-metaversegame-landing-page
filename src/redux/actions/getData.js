export const getTab = (position, id) => {
    return(dispatch) => {
        dispatch({
            type: "GET_POSITION",
            data: position, id
        })
    }
}