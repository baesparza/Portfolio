import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { StudiesComponent } from './studies/studies.component';
import { EducationComponent } from './education/education.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProyectosComponent,
    SkillsComponent,
    LanguagesComponent,
    StudiesComponent,
    EducationComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
