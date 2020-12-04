const initialState = {
    // isReady: false,
    notes: [{
        id: 0,
        text: 'Купить молоко'
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case 'SET_NOTES':
        //     return {
        //         ...state,
        //         notes: action.payload,
        //         isReady: true
        //     }

        case 'ADD_NOTES':
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }
        default:
            return state

    }
}
