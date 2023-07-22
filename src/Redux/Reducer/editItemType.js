const editItemType = (state = null, { type, payload }) => {
    switch (type) {
        case "ADD_ITEM_TYPE":
            
            return payload;
    
        default:
            return state;
    }
};

export default editItemType;