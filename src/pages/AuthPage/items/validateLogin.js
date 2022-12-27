export default function (values) {
  const errors = {};


  const requiredFields = ['email', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required field';
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password && !/[0-9a-zA-Z'-]{6,}|[0-9а-яА-ЯёЁ'-]{6,}/g.test(values.password)) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
}


