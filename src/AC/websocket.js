export function removeBoardWS (id, socket) {
    return (dispatch) => {
        let postData = {
            payload: { id },
        }

        socket.emit('remove board', postData)
     }     
}

export function addBoardWS (name, socket) {
    return (dispatch) => {
        let postData = {
            payload: { name },
        }

        socket.emit('add board', postData)
     }     
}

