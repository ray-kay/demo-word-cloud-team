import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AdminComponent } from './pages/admin/admin.component';
import { DefaultComponent } from './pages/default/default.component';
import { TagCloudModule } from 'angular-tag-cloud-module';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        DefaultComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        TagCloudModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
