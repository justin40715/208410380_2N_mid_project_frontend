const CardReducer_80 = (state, action) => {
    if(action.type === 'GET_CARDS_SUPABASE_SUCCUSS') {
        return {...state, data: action.payload}
    }
}


export default CardReducer_80;