import { mask, unMask } from "remask";

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateTel(tel) {
  var re = /\(\d{2}\)\s\d{4,5}\-\d{4}/;

  return re.test(tel);
}

function masked(name, value) {
  var maskedValue = value;
  switch (name) {
    case "cpf":
      var maskedValue = mask(unMask(value), ["999.999.999-99"]);
      break;
    case "tel":
      var maskedValue = mask(unMask(value), [
        "(99) 9999-9999",
        "(99) 99999-9999",
      ]);
      break;
    default:
      var maskedValue = value;
      break;
  }
  return maskedValue;
}

export { validateEmail, validateTel, masked };
