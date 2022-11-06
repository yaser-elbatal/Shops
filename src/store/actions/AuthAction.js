import { showToaster } from "@components";

import { ActionType, LOGIN_Action } from "../types";


export const loginAction = ({ phone, password }) => {
    return async (dispatch) => {

        showToaster({ message: 'Login Successefully', type: 'success' })
        dispatch({
            type: LOGIN_Action,
            payload: { phone, password },
        });
    };
};
