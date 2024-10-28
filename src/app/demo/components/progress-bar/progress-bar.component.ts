import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  standalone: true,
  imports: [CommonModule, ProgressBarModule]
})
export class ProgressBarComponent {

  @Input() value: number = 0; 

  get progressValue(): number {
    return this.value;
  }
}
