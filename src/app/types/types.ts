export type FormikRegisterValues = {
  firstName: string;
  lastName: string;
  userRegisterEmail: string;
  userRegisterPassword: string;
  rePassword: string;
  isAccept: boolean;
};

export type FormikLoginValues = {
  userLoginEmail: string;
  userLoginPassword: string;
  rememberMe: boolean;
};

export type FormikProfileValues = {
  firstName: string;
  lastName: string;
  userEmail: string;
};

export type FormikPasswordValues = {
  password: string;
  rePassword: string;
};
