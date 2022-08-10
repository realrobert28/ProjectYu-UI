import { Injectable, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

@Injectable()
export abstract class BaseComponent implements OnDestroy {

  protected subs = new SubSink();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
