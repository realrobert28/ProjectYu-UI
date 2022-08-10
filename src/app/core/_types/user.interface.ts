export interface IUser {
  id?: number;
  firstName?: string;
  first_name?: string;
  last_name?: string;
  lastName?: string;
  email: string;
  isActive?: any;
  role?: string;
  permissions?: string[];
  isParentAgent?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Credentials {
  email: string;
  password: string;
  rememberConsent: boolean;
}
