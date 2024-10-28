import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { TeacherService } from '../../service/teacher.service';
import { Skills } from '../../models/teacher';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    teachersData: any = {};
    progressValue: number = 0; 
    loading: boolean = true;
    quizData: any;
    documentData: any;
    skills: Skills = { topTested: [], toImprove: [] };

    constructor(private teacherService: TeacherService) {}

    ngOnInit() {
        this.loadTeacherData();
    }

    loadTeacherData(): void {
        this.teacherService.getTeachersData().pipe(
          catchError(err => {
            console.log('Error loading teacher data : ' + err)
            this.loading = false;
            return of(null);
          })
        ).subscribe(data => {
          this.loading = false;
          if (data) {
            this.teachersData = data;
            this.calculateProgress();
            this.prepareChartData();
            this.prepareSkills();
          }
        });
    }
    
    calculateProgress(): void {
        if (this.teachersData.token) {
          const total = this.teachersData.token.total;
          const consumed = this.teachersData.token.consumed;
          this.progressValue = ((total - consumed) / total) * 100;
        }
    }

    prepareChartData(): void {
        this.quizData = {
            labels: ['Générés', 'Publiés', 'Brouillon', 'Étudiants Passés'],
            datasets: [
                {
                    data: [
                        this.teachersData.quiz.total_generated, 
                        this.teachersData.quiz.total_published, 
                        this.teachersData.quiz.total_draft,
                        this.teachersData.quiz.students_passed
                    ],
                    backgroundColor: ['#8c0aee', '#a4c9ff', '#ff3f44', '#2c7fff']
                }
            ]
        };

        this.documentData = {
            labels: ['Créés', 'Exercices générés', 'Publiés'],
            datasets: [
                {
                    data: [
                        this.teachersData.document.total_created, 
                        this.teachersData.document.total_exercises_generated, 
                        this.teachersData.document.total_published
                    ],
                    backgroundColor: ['#FF6384', '#980ef0', '#FFCE56']
                }
            ]
        };
    }

    prepareSkills(): void {
        if (this.teachersData.competence) {
            this.skills.topTested = this.teachersData.competence.top_tested_knowledge;
            this.skills.toImprove = this.teachersData.competence.top_knowledge_to_improve;
        }
    }
}
