import { Component, Input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { Skills } from '../../models/teacher';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-skills-list',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss'
})
export class SkillsListComponent {
  @Input() skills: Skills;

  get skillsAL(): Skills {
    console.log("skills :" + this.skills)
    return this.skills;
  }
}
