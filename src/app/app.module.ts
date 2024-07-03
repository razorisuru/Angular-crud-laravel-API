import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentsComponent } from './Pages/students/students.component';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';
import { StudentEditComponent } from './Pages/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudentCreateComponent,
    StudentsComponent,
    LoaderComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
