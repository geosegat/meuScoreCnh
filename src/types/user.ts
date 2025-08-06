export interface User {
  id: string;
  name: string;
  cpf: string;
  cnh: string;
  category: string;
  validityDate: string;
  email: string;
  phone: string;
  profileImage?: string;
  currentPoints: number;
  maxPoints: number;
}

export interface UserCredentials {
  cpf: string;
  password: string;
}
