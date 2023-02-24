import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: ' Intern',
      company: 'SalvorOn Technologies Pvt.Ltd.',
      duration: '1Feb-28Feb',
      description: [
        'Right now I am open to new oppurtunities and experiences.',
        'Developed beautiful Android, Angular, and NodeJS-based products.',
      ],
    },



    {
      role: ' Intern',
      company: 'Linkcode Technologies Pvt.Ltd.',
      duration: '1Jan-30Mar',
      description: [
        'Working to develop new technologies to make life easier.',
        'Key technologies worked on involve C and CPP , Python.'
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
