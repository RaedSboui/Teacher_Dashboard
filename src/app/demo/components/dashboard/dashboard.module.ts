import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { SkillsListComponent } from '../skills-list/skills-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        ProgressSpinnerModule,

        ProgressBarComponent,
        DoughnutChartComponent,
        SkillsListComponent
    ],
    declarations: [
        DashboardComponent,
    ]
})
export class DashboardModule { }
