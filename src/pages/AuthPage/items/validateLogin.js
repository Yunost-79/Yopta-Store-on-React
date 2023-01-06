export default function (values) {
  const errors = {};


  const requiredFields = ['username', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required field';
    }
  });

  // if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  if(values.username && !/[0-9a-zA-Z'-]{4,}|[0-9а-яА-ЯёЁ'-]{4,}/g.test(values.username)){
    errors.username = 'Username must be at least 4 characters long';
  }

  if (values.password && !/[0-9a-zA-Z'-]{4,}|[0-9а-яА-ЯёЁ'-]{4,}/g.test(values.password)) {
    errors.password = 'Password must be at least 4 characters long';
  }

  return errors;
}


