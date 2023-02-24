import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'C and C++',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'SQL, PLSQL',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'HTML, CSS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Wordpress',
      level: 'Expert',
      rating: 90,
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
