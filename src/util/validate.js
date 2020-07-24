import { validateEmail, validateTel } from "./helpers";

function validateInputLogin(data) {
  const user = {
    type: "",
    messageErr: "",
  };
  if (data.email === "") {
    user.type = "email";
    user.messageErr = "O email é obrigatório";
    throw user;
  } else if (!validateEmail(data.email)) {
    user.type = "email";
    user.messageErr = "Email inválido";
    throw user;
  }
  if (data.password === "") {
    user.type = "password";
    user.messageErr = "Senha não inserida";
    throw user;
  }
}

function validateInputClients(data) {
  if (data.name === "") {
    const message = "O nome do cliente é obrigatório";
    throw message;
  }

  if (data.mail === "") {
    const message = "O email é obrigatório";
    throw message;
  } else if (!validateEmail(data.mail)) {
    const message = "Email inválido";
    throw message;
  }

  if (data.tel === "") {
    const message = "O número do telefone é obrigatório";
    throw message;
  } else if (!validateTel(data.tel)) {
    const message = "Número do telefone está inválido";
    throw message;
  }

  if (data.city === "") {
    const message = "Nome da cidade é obrigatório";
    throw message;
  }
}

export { validateInputLogin, validateInputClients };
