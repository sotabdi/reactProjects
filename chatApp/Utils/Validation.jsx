// all regex
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const nameRegex = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i;
const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// validators

export function emailValidator(email) {
  const toLower = email.toLowerCase();
  return emailRegex.test(toLower);
}

export function nameValidator(name) {
  if (name.lenth > 15) {
    return false;
  } else {
    return nameRegex.test(name);
  }
}

export function passValidator(pass) {
  return passRegex.test(pass);
}
