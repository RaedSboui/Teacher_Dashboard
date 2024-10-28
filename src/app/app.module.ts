import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProgressBarModule } from 'primeng/progressbar'; 
import { BrowserModule } from '@angular/platform-browser';
import { TeacherService } from './demo/service/teacher.service';

@NgModule({
    declarations: [
        AppComponent, 
        NotfoundComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule, 
        AppLayoutModule,
        ProgressBarModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        TeacherService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
