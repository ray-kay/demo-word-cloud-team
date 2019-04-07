import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

export interface IUserData {
    name: string;
}

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

    inputValue: string;
    itemsCollection: AngularFirestoreCollection;
    wordsInput: IUserData[] = [];

    constructor(private db: AngularFirestore) {
        this.itemsCollection = this.db.collection('items');
    }

    ngOnInit() {
    }

    addWord(input: string) {
        // add to fb
        this.itemsCollection.add({ name: input });
        // add user list
        this.wordsInput.push({ name: input });
        this.inputValue = '';
    }

}
