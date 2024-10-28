import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent {
  @Input() chartData: any;
  @Input() title: string = '';

  chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        // position: 'top',
        display: false,
      },
      title: {
        display: true,
        text: '',
        color: '#0B3C6A',
        font: {
          weight: 'bold',
        },
      },
    },
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.chartOptions.plugins.title.text = changes['title'].currentValue;
    }
  }
}
