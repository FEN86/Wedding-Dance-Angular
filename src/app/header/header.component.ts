import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Section} from "../interfaces/data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public data: Section;

  @Output()
  public actionClicked: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  public onScroll(): void {
    if(window.pageYOffset > 0) {
      this.headerElem.classList.add('header--shadow');
    }
    else {
      this.headerElem.classList.remove('header--shadow');
    }
  }

  private headerElem: HTMLElement;

  constructor(
    private elem: ElementRef
  ) {}

  ngOnInit(): void {
    this.headerElem = this.elem.nativeElement.querySelector('.header');
  }

  onAction(event) {
    event.preventDefault();
    this.actionClicked.emit();
  }
}
