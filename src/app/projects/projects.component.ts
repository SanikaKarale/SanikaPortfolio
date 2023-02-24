import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Event Management System',
      technologies: 'NETBeans for Frontend and MongoDB as a backend',
      description: [
        'The purpose of this project is to provide event management system.',
        'Online event registration portal.',
        
      ],
    },
    {
      title: 'Airline Reservation System',
      technologies: 'Wordpress, XAMPP',
      description: [
        'In this project I have created an interactive website related to airline reservation.',
        'Online ticket booking system',
        'Used Wordpress for development and streamed it through XAMPP server',
      ],
    },
    {
      title: 'Website Development',
      technologies: 'Figma,HTML CSS',
      description: [
        'In this project I have created an interactive website for Yashraj Developers for Developing the Land.',
        'It is completely official website which are created for client to develope lands and build homes.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
