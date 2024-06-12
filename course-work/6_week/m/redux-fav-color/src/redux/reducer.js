const initialState = {
    favColor: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_COLOR':
            console.log(` hey, check this fav:`, action.payload)
            return {...state, favColor: action.payload}
            
        case 'SET_COLOR':
            console.log(` hey, check this fav:`, action.payload)
            return {...state, favColor: action.payload}

        default :
            console.log(`uh oh`)
            return state

    } 
}

export default reducer