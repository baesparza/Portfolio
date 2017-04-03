import { Routes } from '@angular/router';

import { AllProjectsComponent } from '../all-projects/all-projects.component';
import { MainComponent } from '../main/main.component';

export const appRoutes: Routes = [
    {path:'', component: MainComponent},
    {path:'Proyectos', component: AllProjectsComponent}
];