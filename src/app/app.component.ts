import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SectionService} from "./services/section.service";
import {map} from "rxjs/operators";
import {Data} from "./interfaces/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('modal', {static: true})
  public modal: ElementRef;

  public sectionSub;
  public sectionContent: Data;
  public isLoading: boolean = true;

  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    this.getSection();
  }

  ngOnDestroy(): void {
    this.sectionSub.unsubscribe();
  }

  getSection(): void {
    this.sectionSub = this.sectionService.getSection()
      .pipe(
        map((val: any) => {
          const data: Data = {};

          val['content'].forEach((d) => data[d.type] = d);

          return data;
        })
      )
      .subscribe((data: Data) => {
        this.sectionContent = data;
        this.isLoading = false;
      });
  }

  openModal(): void {
    this.modal.nativeElement.classList.add('active');
  }

  closeModal(): void {
    this.modal.nativeElement.classList.remove('active');
  }
}
