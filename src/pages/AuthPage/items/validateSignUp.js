export default function (values) {
  const errors = {};

  const requiredFields = ['name', 'email', 'password', 'passwordConfirm'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required field';
    }
  });

  if (values.name && !/^([0-9a-zA-Z'-]{3,}|[0-9а-яА-ЯёЁ'-]{3,})$/.test(values.name)) {
    errors.name = 'Username must be at least 3 characters long';
  }

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password && !/[0-9a-zA-Z'-]{6,}|[0-9а-яА-ЯёЁ'-]{6,}/g.test(values.password)) {
    errors.password = 'Password must be at least 6 characters long';
  }
  if (values.password !== values.passwordConfirm) {
    errors.password = 'Passwords do not match';
  }
  if (values.passwordConfirm && !/[0-9a-zA-Z'-]{6,}|[0-9а-яА-ЯёЁ'-]{6,}/g.test(values.passwordConfirm)) {
    errors.passwordConfirm = 'Password must be at least 6 characters long';
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords do not match';
  }
  return errors;
}
