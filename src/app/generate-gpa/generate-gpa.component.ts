import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generate-gpa',
  templateUrl: './generate-gpa.component.html',
  styleUrls: ['./generate-gpa.component.css']
})
export class GenerateGpaComponent implements OnInit {

  @Input() GPA: any;

  constructor() { }

  ngOnInit() {
  }

}
