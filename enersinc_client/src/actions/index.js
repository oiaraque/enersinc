import axios from 'axios';

//------------------------------------------------------------------------------------------------------

export function getPersona(){
	return async function(dispatch){
		var json = await axios.get("http://localhost:8000/persona")
		console.log(json)
		return dispatch({
			type: 'GET_PERSONA',
			payload: json.data
		})
	}
}

//------------------------------------------------------------------------------------------------------

export function postPersona(payload){
	return async function(dispatch){
		var info = axios.post("http://localhost:8000/persona", payload)
		.then(function(response){})
		.catch(function(error){});
	}
}

//------------------------------------------------------------------------------------------------------