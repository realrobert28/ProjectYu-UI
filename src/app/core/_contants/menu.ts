import { Menu } from '../_models/menu.model';

export const superAdminMenuItems = [
  new Menu(1, 'Dashboard', '/app/dashboard/v1', '', 'pie_chart', '', false, 0, false, true),
  new Menu(2, 'Applications', '/app/applications/list', '', 'account_balance', '', false, 0, false, true),
];

export const adminMenuItems = [
  new Menu(1, 'Dashboard', '/app/dashboard/v1', '', 'pie_chart', '', false, 0, false, true),
  new Menu(2, 'Applications', '/app/applications/list', '', 'account_balance', '', false, 0, false, true),
  new Menu(3, 'My Companies', '/app/companies', '', 'house', '', false, 0, false, true),
];

export const resellerMenuItems = [
  new Menu(100, 'Dashboard', '/app/dashboard/v1', '', 'pie_chart', '', false, 0, false, true),
  new Menu(200, 'Applications', '/app/applications/list', '', 'account_balance', '', false, 0, false, true),
  new Menu(300, 'Enquirers', '/app/enquirers/list', '', 'follow_the_signs', '', false, 0, false, true),
];

export const userMenuItems = [
  new Menu(1000, 'Dashboard', '/app/dashboard/v1', '', 'pie_chart', '', false, 0, false, true),
  new Menu(2000, 'Applications', '/app/applications/list', '', 'account_balance', '', false, 0, false, true),
];
