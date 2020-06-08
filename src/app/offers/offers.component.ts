import { Component, Input, OnInit } from '@angular/core';
import { Section } from "../interfaces/data";
import { UserService } from "../services/user.service";
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @Input()
  public data: Section;


  public editable: boolean = false;

  formEditContent: FormGroup;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formEditContent = new FormGroup({
      title: new FormControl(this.data.meta.title),
      description: new FormControl(this.data.meta.description),
    });
    this.data.content.forEach(item => {
      this.formEditContent.addControl(item._id, new FormControl(
        item.title
      ));
    });
    this.data.content.forEach(u => {
      this.formEditContent.addControl(u.url, new FormControl(
        u.url
      ));
    });
    // const content: FormArray = new FormArray([]);
    // this.data.content.forEach(item => {
    //   content.push(
    //     new FormGroup({
    //       title: new FormControl(item.title),
    //       url: new FormControl(item.url)
    //     }))
    // });
  }

  submit() {
    const formData = { ...this.formEditContent.value }
    console.log(formData)
  }

  public isAuthorized(): boolean {
    return this.userService.isAuthorized();
  }
}
