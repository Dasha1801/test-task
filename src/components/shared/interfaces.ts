export interface IPropsBtn {
  text: string;
  background: string;
  onClick?: () => void;
}

export interface IUserCard {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export interface IPropsCard {
  info: IUserCard;
}
export interface IPropsForm {
  isReadOnly: boolean;
}

export interface ITextField {
  label: string;
  readOnly?: boolean;
}
