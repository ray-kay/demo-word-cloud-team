import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { CloudData } from 'angular-tag-cloud-module';

export interface IUserData extends CloudData {
    id?: string;
    isNew: boolean;
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
        const newItem: IUserData = {
            id: null,
            text: input,
            weight: 1,
            isNew: true
        };
        // add to fb and update in payload for easier reference as admin
        this.itemsCollection.add(newItem).then(
            (value) => {
                this.itemsCollection.doc(value.id).update({id: value.id});
            }
        );
        // add user list
        this.wordsInput.push(newItem);
        this.inputValue = '';
    }

}
