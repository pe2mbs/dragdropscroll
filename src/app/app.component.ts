import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GidsService } from './services/gids.service';
import { IMetaData } from './services/interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  public programList: Array<IMetaData> = [];
  public currentTime: Date = new Date();

  @ViewChild('scrollEl')
  scrollEl!: ElementRef<HTMLElement>;

  constructor(
    private gidsService: GidsService
  ) { }

  ngOnInit() {
    this.gidsService.getTodayPrograms$()
      .subscribe({
        next: (data: Array<IMetaData>) => {
          this.programList = data;
        },
        error: (error: any) => {
          console.log('error: ', error)
        }
      })
  }

  /**
   * After a drop move the item and recalculate all the start and end times
   * @param event
   */
  drop(event: CdkDragDrop<IMetaData[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.recalculatePubTimes();
  }

  /**
   * Recalculates pub times
   */
  private recalculatePubTimes(): void {
    this.currentTime = new Date();
    let startTime: Date = new Date();
    startTime = new Date(startTime.setHours(0, 0, 0, 0));

    this.programList.forEach((element: IMetaData) => {
      const length: number = new Date(element.EndPubDate).getTime() - new Date(element.PubDate).getTime();
      element.PubDate = startTime;
      element.EndPubDate = new Date(startTime.getTime() + length);
      startTime = new Date(startTime.getTime() + length);
    });

  }

  /**
   * scroll 1 screen width to the right
   * @param $event
   */
   onClickRight($event: Event) {
    this.scrollEl.nativeElement.scrollLeft += window.innerWidth;
    $event.preventDefault();
  }

  /**
   * scroll 1 screen width to the left
   * @param $event
   */
  onClickLeft($event: Event) {
    this.scrollEl.nativeElement.scrollLeft -= window.innerWidth;
    $event.preventDefault();
  }

  /**
   * Handle wheel event to scroll the list
   * @param $event
   */
  onWheel($event: WheelEvent): void {
    this.scrollEl.nativeElement.scrollLeft += $event.deltaY;
    $event.preventDefault();
  }

}
