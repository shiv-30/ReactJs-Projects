const redux = require('redux')
const axios = require('axios')
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const thunkMiddleware = require('redux-thunk').default

// state
const initialState = {
    loading: false,
    users: [],
    error:''
}

// action
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FECTH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

// Reducer

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS: return {
            loading: false,
            users: action.payload,
            error:''
        }

        case FECTH_USER_FAILURE: return{
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }

        default: return state
    }
}

//action creater
// redux-thunk allows action creator to return a function instead of object
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //response.data is array of users
                const users = response.data.map(user => user.id)
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                // error.message is thee error description
                dispatch(fetchUserFailure(error.message))
            })
    }
}
// store 
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())