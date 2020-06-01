const INITIAL_STATE = {
    isSignedIn: null    
};

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return { ...state, isSignedIn: action.payload};
            
        default:
            return state;
    }
};

export default userReducer;