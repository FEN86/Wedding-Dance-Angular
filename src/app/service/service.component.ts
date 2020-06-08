import {Component, Input, OnInit} from '@angular/core';
import {Section} from "../interfaces/data";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @Input()
  public data: Section;
  constructor() { }

  ngOnInit(): void {
  }

}
