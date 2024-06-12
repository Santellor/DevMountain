import axios from "axios"

const initialState = {
    loading: true,
    articles: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'PENDING': 
            return {...state, 
                loading: true
            }

        case 'REQUEST_ARTICLES': 
            return {...state,
                loading: false,
                articles: action.payload
            }

        default: 
            return state
    }
    
}

export const requestArticles = async (reducer) => {
    reducer({type: `PENDING`})
    const res = await axios.get('/api/reddit') 
    reducer({type: `REQUEST_ARTICLES`, payload: res.data})
}


export default reducer