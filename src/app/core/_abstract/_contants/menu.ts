import { Menu } from "../../_models/menu.model";


export const adminMenuItems = [
  new Menu(1, 'Dashboard', '/app/dashboard/v1', null, 'pie_chart', null, false, 0, false, true),
  new Menu(2, 'Applications', '/app/applications/list', null, 'account_balance', null, false, 0, false, true),
];

export const employeeMenuItems = [
  new Menu(1, 'Dashboard', '/app/dashboard/v1', null, 'pie_chart', null, false, 0, false, true),
  new Menu(2, 'Applications', '/app/applications/list', null, 'account_balance', null, false, 0, false, true),
  new Menu(3, 'My Companies', '/app/companies', null, 'house', null, false, 0, false, true),
];

export const agentMenuItems = [
  new Menu(100, 'Dashboard', '/app/dashboard/v1', null, 'pie_chart', null, false, 0, false, true),
  new Menu(200, 'Applications', '/app/applications/list', null, 'account_balance', null, false, 0, false, true),
  new Menu(300, 'Enquirers', '/app/enquirers/list', null, 'follow_the_signs', null, false, 0, false, true),
];

export const memberMenuItems = [
  new Menu(1000, 'Dashboard', '/app/dashboard/v1', null, 'pie_chart', null, false, 0, false, true),
  new Menu(2000, 'Applications', '/app/applications/list', null, 'account_balance', null, false, 0, false, true),
];

export const parentAgentMenuItems = [
  new Menu(400, 'My Agents', '/app/agents', null, 'people', null, false, 0, false, true)
];
