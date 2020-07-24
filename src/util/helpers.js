import { mask, unMask } from "remask";

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateTel(tel) {
  var re = /\(\d{2}\)\s\d{4,5}-\d{4}/;
  return re.test(tel);
}

function masked(name, value) {
  switch (name) {
    case "cpf":
      return mask(unMask(value), ["999.999.999-99"]);
    case "tel":
      return mask(unMask(value), ["(99) 9999-9999", "(99) 99999-9999"]);
    default:
      return value;
  }
}

export { validateEmail, validateTel, masked };
