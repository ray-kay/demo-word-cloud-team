import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IUserData } from '../default/default.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    itemsCollection: AngularFirestoreCollection;
    words: Observable<IUserData[]>;

    constructor(private db: AngularFirestore) {
        this.itemsCollection = this.db.collection('items');
    }

    ngOnInit() {
        this.words = this.itemsCollection.valueChanges() as Observable<IUserData[]>;
    }
}
