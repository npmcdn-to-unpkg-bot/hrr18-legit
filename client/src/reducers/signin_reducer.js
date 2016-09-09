import {
  LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE
} from '../constants/ActionTypes.js'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
        console.log("LOGIN REQUESTED")
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
            userInfo: action.creds
        })
    case LOGIN_SUCCESS:
      console.log("LOGIN SUCCEEDED");
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token
      })
    case LOGIN_SUCCESS:
      console.log("LOGIN SUCCEEDED");
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: action.message
      })
    default:
      return state
  }
};