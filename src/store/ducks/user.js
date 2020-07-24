export const Types = {
  USER: "auth/USER",
};
const INITIAL_STATE = {
  username: "",
};
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.USER:
      return {
        ...state,
        username: action.user,
      };

    default:
      return state;
  }
}

export const Creators = {
  toggleUser: (user) => ({
    type: Types.USER,
    user,
  }),
};
