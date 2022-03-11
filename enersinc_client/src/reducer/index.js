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
		case 'PUT_PERSONA':
		return{
			...state,
			personas: (state.personas.length && [
				...state.personas,
				action.payload,
			]) || [...state.personas, action.payload]
		}
		case 'DELETE_PERSONA':
		return{
			...state, 
			personas: 
			(state.personas.length && 
				state.personas.filter((c)=>c !== action.payload))
		}
		default:
		return state;
	}
}

export default rootReducer;