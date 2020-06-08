import {Component, Input, OnInit} from '@angular/core';
import {Section} from "../interfaces/data";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input()
  public data: Section;

  constructor() { }

  ngOnInit(): void {
  }

}
