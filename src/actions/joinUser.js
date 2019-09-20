export const JOIN_REQUEST = "JOIN_REQUEST";
export const JOIN_SUCCESS = "JOIN_SUCCESS";
export const JOIN_FAIL = "JOIN_FAIL";



export default (data) => {
    return {
        type: JOIN_REQUEST,
        payload: data
    }
}