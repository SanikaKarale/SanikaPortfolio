import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Bharati Vidhyapeeth College Of Engineering for Women,Pune-43",
      course: 'BE',
      duration: '2021-2024',
      score: ' Ongoing ',
    },
    
    {
      institute: 'Nowrosjee Wadia College,Pune',
      course: 'HSC',
      duration: '2020',
      score: '66%',
    },
    {
      institute: 'Shri Shivaji Vidhyalay,Shelpimpalgaon',
      course: 'SSC',
      duration: '2018',
      score: '90.20%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
