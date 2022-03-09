const initialState = {
	personas:[]
}
//------------------------------------------------------------------------------------------------

function rootReducer(state=initialState, action){
	switch(action.type){
		case 'GET_PERSONA':
		return{
			...state,
			personas: action.payload	
		}
		case 'POST_PERSONA':
		return{
			...state
		}
		default:
		return state;
	}
}

export default rootReducer;