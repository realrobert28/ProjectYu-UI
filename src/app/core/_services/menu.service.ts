import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngxs/store';
import { ROLE } from '@core/_contants';
import {
  superAdminMenuItems,
  adminMenuItems,
  resellerMenuItems,
  userMenuItems,
} from '@core/_contants/menu';
import { Menu } from '@core/_models/menu.model';
import { User } from '@core/_models/user.model';
import { AuthState } from '@core/_store';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private user: User;

  constructor(
    private _location: Location,
    private _store: Store,
  ) {
    this.user = this._store.selectSnapshot(AuthState.user);
  }

  getItems(): Menu[] {
    let items: Menu[];
    switch (this.user.role) {
      case ROLE.SUPERADMIN:
        items = superAdminMenuItems;
        break;
      case ROLE.ADMIN:
        items = adminMenuItems;
        break;
      case ROLE.RESELLER:
        items = resellerMenuItems;
        break;
      case ROLE.USER:
        items = userMenuItems;
        break;
    }

    const menuItems: Menu[] = [
      ...items
    ];

    return this._filterItems(menuItems);
  }

  private _filterItems(items: Menu[]): Menu[] {
    const result = [];
    const map = new Map();

    for (const item of items) {
      if (! map.has(item.id)) {
        map.set(item.id, true);
        result.push(item);
      }
    }

    return result;
  }

  expandActiveSubMenu(menu: Menu[]): void {
    const url = this._location.path();
    const activeMenuItem = menu.filter(item => item.routerLink === url);
    if (activeMenuItem[0]) {
      let menuItem = activeMenuItem[0];
      while (menuItem.parentId !== 0) {
        const parentMenuItem = menu.filter(item => item.id === menuItem.parentId)[0];
        menuItem = parentMenuItem;
        this.toggleMenuItem(menuItem.id);
      }
    }
  }

  toggleMenuItem(menuId: number): void {
    const menuItem = document.getElementById(`menu-item-${menuId}`);
    const subMenu = document.getElementById(`sub-menu-${menuId}`);
    if (subMenu) {
      if (subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
        menuItem.classList.remove('expanded');
      } else {
        subMenu.classList.add('show');
        menuItem.classList.add('expanded');
      }
    }
  }

  closeOtherSubMenus(menu: Menu[], menuId: number): void {
    const currentMenuItem = menu.filter(item => item.id === menuId)[0];
    if (currentMenuItem.parentId === 0 && !currentMenuItem.target) {
      menu.forEach(item => {
        if (item.id !== menuId) {
          const subMenu = document.getElementById(`sub-menu-${item.id}`);
          const menuItem = document.getElementById(`menu-item-${item.id}`);
          if (subMenu) {
            if (subMenu.classList.contains('show')) {
              subMenu.classList.remove('show');
              menuItem.classList.remove('expanded');
            }
          }
        }
      });
    }
  }

  closeAllSubMenus(): void {
    const menu = document.getElementById('vertical-menu');
    if (menu) {
      /* eslint-disable */
      for (let i = 0; i < menu.children[0].children.length; i++) {
      /* eslint-enable */
        const child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
            child.children[0].classList.remove('expanded');
            child.children[1].classList.remove('show');
          }
        }
      }
    }
  }
}
