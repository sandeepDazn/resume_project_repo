import { UserModalFields } from "../modalFields/user.js";

const userDataValidation = (data) => {
  const modalProperties = Object.keys(UserModalFields);

  const bodyProperties = Object.keys(data);

  const result = modalProperties.every(
    (value, index) => value === bodyProperties[index]
  );
};

export { userDataValidation };
