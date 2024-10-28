import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class TeacherService {

    constructor(private http: HttpClient) { }

    getTeachersData(): Observable<any> {
        return this.http.get<any>('assets/demo/data/teachers.json').pipe(
            map(res => res),
            catchError(error => {
                console.error('Error fetching teachers data', error);
                return of(null);
            })
        )
    }
}
