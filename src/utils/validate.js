export const validate = (value, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;
      case 'maxLength': isValid = isValid && maxLengthValidator(value, rules[rule]); break;
      case 'isRequired': isValid = isValid && requiredValidator(value); break;
      default: isValid = true;
    }
  }
  return isValid;
}

const minLengthValidator = (value, minLength) => {
  return value.trim().length >= minLength;
}

const maxLengthValidator = (value, maxLength) => {
  return value.trim().length <= maxLength;
}

const requiredValidator = (value) => {
  return value.trim !== '';
}
