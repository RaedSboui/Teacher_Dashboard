import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Accueil',
                items: [
                    { label: 'Tableau de bord', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Auth',
                items: [
                    {
                        label: 'Cours',
                        icon: 'pi pi-book',
                        items: [
                            {
                                label: 'Algèbre",',
                                icon: 'pi pi-calculator',
                                routerLink: ['/']
                            },
                            {
                                label: 'Algorithmes',
                                icon: 'pi pi-code',
                                routerLink: ['/']
                            },
                            {
                                label: 'Analyse',
                                icon: 'pi pi-chart-line',
                                routerLink: ['/']
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
