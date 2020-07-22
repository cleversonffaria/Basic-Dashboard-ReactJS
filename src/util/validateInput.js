import { validateEmail } from "./helpers";

export default function validateInput(data) {
  const user = {
    type: "",
    message: "",
  };
  if (data.email === "") {
    user.type = "email";
    user.message = "O email é obrigatório";
    throw user;
  } else if (!validateEmail(data.email)) {
    user.type = "email";
    user.message = "Email inválido";
    throw user;
  }
  if (data.password === "") {
    user.type = "password";
    user.message = "Senha não inserida";
    throw user;
  }
}
