import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Sanika Karale'],
    ['DOB', '23/11/2002'],
    ['Work Exp', 'Fresher'],
    ['Education', 'BE(2024)'],
    ['Interests', 'Travelling'],
  ];

  aboutMe: string[] = [
    'Hi, I am Sanika Karale currently pursuing Bachelor Of Engineering .',
    'As I am fresher in the IT industry I am interested in new technologies for enhancing my skills. '
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
