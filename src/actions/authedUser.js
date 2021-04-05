export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOG_OUT_AUTHED_USER = "LOG_OUT_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function logOutAuthedUser() {
  return {
    type: LOG_OUT_AUTHED_USER,
  };
}
