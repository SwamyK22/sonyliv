const adminReducer = (state = null, { type, payload }) => {
    switch (type) {
        case 'ADD_ADMIN':
            
            return payload;
    
        default:
            return state;
    }   
}

export default adminReducer;