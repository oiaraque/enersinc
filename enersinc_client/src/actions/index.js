import axios from 'axios';

//------------------------------------------------------------------------------------------------------

export function getPersona(){
	return async function(dispatch){
		var json = await axios.get("http://localhost:8000/persona")
		return dispatch({
			type: 'GET_PERSONA',
			payload: json.data
		})
	}
}

//------------------------------------------------------------------------------------------------------

export function postPersona(payload){
	return async function(dispatch){
		try{
			const info = axios.post("http://localhost:8000/persona", payload)
			return dispatch({
				type: 'POST_PERSONA',
				payload: info.data
			});
		} catch(error) {
			console.log(error);
		}
	};
}

//------------------------------------------------------------------------------------------------------

export function putPersona(payload){
	return async function(dispatch){
		try{
			const info = axios.put("http://localhost:8000/persona", payload)
			return dispatch({
				type: 'PUT_PERSONA',
				payload: info.data
			});
		} catch(error) {
			console.log(error);
		}
	};
}

//------------------------------------------------------------------------------------------------------

export function deletePersona(nombre) {
  return async function (dispatch) {
    let deleted = await axios.delete(`http://localhost:3001/cart/${nombre}`);
    return dispatch({
      type: 'DELETE_PERSONA',
      payload: deleted.data
    });
  };
}

//------------------------------------------------------------------------------------------------------