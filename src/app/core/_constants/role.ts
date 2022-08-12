export enum ROLE {
  SUPERADMIN = 'super_admin',
  ADMIN = 'admin',
  RESELLER = 'reseller',
  USER = 'user',
}

export type RoleTypes = ROLE.ADMIN | ROLE.RESELLER | ROLE.USER;
