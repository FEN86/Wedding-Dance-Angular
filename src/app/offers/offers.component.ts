import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Section } from "../interfaces/data";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @Input() public data: Section;

  public editable: boolean = false;

  constructor(
    private userService: UserService,

  ) { }

  ngOnInit(): void {
  }

  public isAuthorized(): boolean {
    return this.userService.isAuthorized();
  }

  openEditor(): void {
    this.editable = true;
  }

  closeEditor(): void {
    this.editable = false;
  }
}
