import { LOGIN_Action } from "../types";

const INITIAL_STATE = {
    user: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOGIN_Action:
            return { ...state, user: action.payload, };

        default:
            return state;
    }
};
