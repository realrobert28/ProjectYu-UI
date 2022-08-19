import { Component, ChangeDetectorRef, OnDestroy, HostListener, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Menu } from '@core/_models';
import { MenuService } from '@core/_services';

@Component({
  selector: 'ngp-default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {

  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
  };
  public mobileQuery: MediaQueryList;
  public isSideNavOpen = true;

  public pageTitle = '';
  private _mobileQueryListener: () => void;

  public menuItems: Menu[] = [];

  @HostListener('window:resize', ['$event'])
  /* eslint-disable @typescript-eslint/no-unused-vars */
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  protected _onWindowResize(event: any): void {
    if (this.mobileQuery.matches) {
      this.isSideNavOpen = false;
    } else {
      this.isSideNavOpen = true;
    }
  }

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _media: MediaMatcher,
    private _title: Title,
    private _menuService: MenuService
  ) {
    this.mobileQuery = this._media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this._changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.menuItems = this._menuService.getItems();

    this.pageTitle = this._title.getTitle();

    if (this.mobileQuery.matches) {
      this.isSideNavOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  toggle():void
  {

  }
}
