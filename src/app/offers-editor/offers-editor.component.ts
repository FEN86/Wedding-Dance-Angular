import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from '../interfaces/data';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { EditContentService } from '../services/editContent.service';

@Component({
  selector: 'app-offers-editor',
  templateUrl: './offers-editor.component.html',
  styleUrls: ['./offers-editor.component.scss']
})
export class OffersEditorComponent implements OnInit {
  @Input() public data: Section;
  @Output() public canceled: EventEmitter<void> = new EventEmitter<void>();

  @Output() public done: EventEmitter<void> = new EventEmitter<void>();

  constructor(private editorContentService: EditContentService) { }

  formEditContent: FormGroup;

  ngOnInit(): void {
    const contentTitles: FormArray = new FormArray([]);
    const contentUrls: FormArray = new FormArray([]);

    this.data.content.forEach(item => {
      contentTitles.push(new FormControl(item.title))
      contentUrls.push(new FormControl(item.url))
    });

    this.formEditContent = new FormGroup({
      title: new FormControl(this.data.meta.title),
      description: new FormControl(this.data.meta.description),
      titles: contentTitles,
      urls: contentUrls
    });
  }

  submit() {
    const formData = { ...this.formEditContent.value };

    this.editorContentService.sendData(this.formDataToSectionData(formData))
      .subscribe();

    this.done.emit();
  }

  public formDataToSectionData(data: any): Section {
    const section: Section = {
      meta: {
        title: data.title,
        description: data.description
      },
      action: null,
      type: 'offer',
      content: []
    };

    for (let i = 0; i < data.titles.length; i++) {
      section.content.push({
        style: [],
        title: data.titles[i],
        url: data.urls[i]
      });
    }

    return section;
  }

  onCancel() {
    this.canceled.emit();
  }
}
