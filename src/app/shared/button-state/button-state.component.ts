import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-button-state',
  templateUrl: './button-state.component.html',
  styleUrls: ['./button-state.component.scss']
})
export class ButtonStateComponent {

  @Input()
  public loading = false;

  @Input()
  public className!: string;
}
