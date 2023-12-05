export default (state=0,action) => {
    switch (action.type) {
        case "TOTAL_PRICE": 
            return state+action.payload;
        default:
            return state;
    }
}