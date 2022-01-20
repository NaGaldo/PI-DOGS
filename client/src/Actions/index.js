import axios from 'axios';

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_NAME_DOG = "GET_NAME_DOG";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const FILTER_BY_TEMPERAMENTS= "FILTER_BY_TEMPERAMENTS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME ="ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT"
export const GET_DETAIL = "GET_DETAIL"
export const POST_DOG = "POST_DOG"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const ORDER_SORT = "ORDER_SORT"
export const DELETE = "DELETE"

export function getAllDogs () {
    return async function (dispatch){
        try {
            var json = await axios("http://localhost:3001/dogs")
            return dispatch ({
                type: GET_ALL_DOGS,
                payload: json.data
            })
         }
        catch(error) {
            alert("Connection failed")
        }
     }
};

export function getNameDog (payload) {
    return async function (dispatch) {
        try {
            var json = await axios(`http://localhost:3001/dogs?name=${payload}`);
            return dispatch ({
                type: GET_NAME_DOG,
                payload: json.data
            })
        }
        catch(error) {
            alert("Try another breed")
        }
    }
};

export function getTemperaments (){
    return async function (dispatch){
        var json = await axios("http://localhost:3001/temperament", {});
        return dispatch ({
            type: GET_TEMPERAMENT, 
            payload: json.data
        })
    }
};

export function getDetail(payload){
    return async function(dispatch){
        try{
            var json = await axios(`http://localhost:3001/dogs/${payload}`)
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            });
        }
      catch(error){
        alert("Try another ID")
      }
    }
};

export function clearDetail(){
    return {
        type: CLEAR_DETAIL,
    }
}

export function filterByTemperaments (payload) {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
}

export function filterCreated (payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}


export function orderSort(payload){
    return {
        type: ORDER_SORT,
        payload
    }
}

export function postDog (payload) {
    return async function(dispatch){
        try{
            await axios.post('http://localhost:3001/dogs', payload);
            return {
                type: POST_DOG,
                }
            } 
        catch(error){
              alert("Post failed")
            }
        } 
 } 
 export function deleteDog (payload){
    return async function (dispatch){
        try{
            const response = await axios.delete(`http://localhost:3001/dogs/${payload}`);
            return {
                type: DELETE,
            }
        }
        catch(error){
            console.log(error)
        }
    }
}


 export function addFavorite (payload){
  return {
      type: ADD_FAVORITE,
      payload
  }  
 }

 export function removeFavorite(payload){
     return {
         type: REMOVE_FAVORITE,
         payload
     }
 }

 export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByWeight(payload){
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}
