import axios from "axios";


export const FETCHING_PICS_START = "FETCHING_PICS_START";
export const FETCHING_PICS_SUCCESS = "FETCHING_PICS_SUCCESS";
export const FETCHING_PICS_FAILURE = "FETCHING_PICS_FAILURE";

const getPics = () => dispatch => {
    dispatch({type: FETCHING_PICS_START});

    axios.get("https://dog.ceo/api/breed/hound/images/random")
    .then(res =>{
        console.log(res.data.message)
        dispatch({type: FETCHING_PICS_SUCCESS, payload: res.data.message})
    })
    .catch(err => {
        console.log(".catchError: ",err);
        dispatch({type: FETCHING_PICS_FAILURE, payload: "Error encountered on .catch"})
    })
}


export default getPics;
