import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent {
  private isDisplay = true;

  @Input() text: string;
  @Output() edit = new EventEmitter<string>();

  beginEdit(el: HTMLElement): void {
      this.isDisplay = false;

      setTimeout(() => {
          el.focus();
      }, 100);
  }

  editDone(newText: string): void {
      this.isDisplay = true;
      this.text = newText;
      this.edit.emit(this.text);
  }

}
