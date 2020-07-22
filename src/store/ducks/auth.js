export const Types = {
  AUTH: "auth/AUTH",
};
const INITIAL_STATE = {
  signIn: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH:
      return {
        ...state,
        user: action.user,
        signIn: true,
        sign: false,
      };

    default:
      return state;
  }
}

export const Creators = {
  toggleAuth: (user) => ({
    type: Types.AUTH,
    user,
  }),
};
