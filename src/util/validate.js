import { validateEmail, validateTel } from "./helpers";

function validateInputLogin(data) {
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

function validateInputClients(data) {
  if (data.name === "") {
    throw "O nome do cliente é obrigatório";
  }

  if (data.mail === "") {
    throw "O email é obrigatório";
  } else if (!validateEmail(data.mail)) {
    throw "Email inválido";
  }

  if (data.tel === "") {
    throw "O número do telefone é obrigatório";
  } else if (!validateTel(data.tel)) {
    throw "Número do telefone está inválido";
  }

  if (data.city === "") {
    throw "Nome da cidade é obrigatório";
  }
}

export { validateInputLogin, validateInputClients };
