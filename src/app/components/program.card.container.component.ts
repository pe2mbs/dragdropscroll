import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-program-card-container',
  template: `
          <div class="vertical-line"></div>
          <app-program-card [program]='program' [currentTime]='currentTimeParam'></app-program-card>
`,
  styles: [
      `.vertical-line {
      border-left: 2px solid black;
      position: absolute;
      height: 100%;
      margin-left: -5px;
    }`,
  ],
})

export class ProgramCardContainer implements OnChanges {
  @Input('program') program: any;
  // The only reason I use the currentTime as a separate parameter is to trigger the onChanges.
  // onCchanges triggers only on primitive types.
  @Input('currentTime') currentTime: any;

  public currentTimeParam:any;
  ngOnChanges(changes: SimpleChanges): void {
    this.currentTimeParam = this.currentTime;
  }
}

