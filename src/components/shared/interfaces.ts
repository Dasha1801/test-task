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
    zipCode: string;
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
