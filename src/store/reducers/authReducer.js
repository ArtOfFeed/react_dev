const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('in');
            return {
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Failed auth'
            };
        case 'SIGN_OUT_SUCCESS':
            console.log('out');
            return state;
        case 'SIGN_UP_SUCCESS':
            console.log('created');
            return state;
        case 'SIGN_UP_ERROR':
            return state;
        default:
            return state;
    }
};

export default authReducer;
