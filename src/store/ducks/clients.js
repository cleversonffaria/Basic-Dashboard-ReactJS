export const Types = {
  REGISTER: "auth/REGISTER",
};
const INITIAL_STATE = {
  data: {},
};
export default function clients(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REGISTER:
      return {
        data: action.clients,
      };

    default:
      return state;
  }
}

export const Creators = {
  toggleClients: (clients) => ({
    type: Types.REGISTER,
    clients,
  }),
};
