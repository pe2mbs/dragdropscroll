import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-program-card-component',
  template: `
    <div class='internalcard'>
      <div class='internalcardcontent'>
        <div class="header" style="background-color: {{colorTimeBox}};">
          {{ program.PubDate | date:"HH:mm"}} - {{ program.EndPubDate | date:"HH:mm"}}
        </div>
        <div class="imagecontainer">
          <img *ngIf="program.SmallArtwork" [src]="program.SmallArtwork" alt="program.Title" />
        </div>
        <h3>{{ program.Title }}</h3>
      </div>
    </div>
`,
  styles: [
    `.internalcard {border: 1px solid rgba(0, 0, 0, 0.03); box-shadow: 2px 5px 5px lightgrey;
             background: white; margin: 5px; border-radius: 5px;  width: calc((100vw - 150px) / 7); vertical-align:top;display: inline-block; }
             `,
    '.internalcardcontent { margin: 10px 10px 10px 10px; }',
    '.imagecontainer img { width: 100%; height: auto }',
    'h3 { font-size: 0.8rem; overflow-wrap: break-word; word-wrap: break-word; hyphens: auto;overflow-wrap: initial; padding-left: 2px; }',
    '.header { font-size: 1rem; color: white; text-align: center; font-weight: bold; padding: 10px 0;}'
  ],
})

export class ProgramCard implements OnChanges {

  @Input('program') program: any;
  // The only reason I use the currentTime as a separate parameter is to trigger the onChanges.
  // onCchanges triggers only on primitive types.
  @Input('currentTime') currentTime: any;

  public volledigenaam: string = '';
  public displayCard: boolean = false;
  public colorTimeBox: string = 'orange';

  /**
   * changes the color of the header is the program is running at the current time.
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    const start = new Date(this.program.PubDate);
    const end = new Date(this.program.EndPubDate);
    this.colorTimeBox = (start < this.currentTime && end > this.currentTime) ? 'red' : 'orange';
  }
}

