import {Component, Input, OnInit} from '@angular/core';
import {Section} from "../interfaces/data";

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  @Input()
  public data: Section;
  constructor() { }

  ngOnInit(): void {
  }

}
