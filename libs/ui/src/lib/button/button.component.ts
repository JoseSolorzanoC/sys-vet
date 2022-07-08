import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sys-vet-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type = 'button';
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();
}
