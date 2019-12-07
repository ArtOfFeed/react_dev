const initialState = {};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error', action.err);
            return state;
        default: return state;
    }
};

export default projectReducer;