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
    wordCloudData: IUserData[] = [];
    itemsCollection: AngularFirestoreCollection;

    constructor(private db: AngularFirestore) {
        this.itemsCollection = this.db.collection('items');
    }

    async ngOnInit() {
        this.itemsCollection.valueChanges().subscribe(
            (userData: IUserData[]) => {
                this.wordCloudData = userData;
            }
        );
    }

    updateWeight(userInput: IUserData, weightChange: number): void {
        userInput.isNew = false;
        userInput.weight += weightChange;
        this.itemsCollection.doc(userInput.id).set(userInput);
    }
}
