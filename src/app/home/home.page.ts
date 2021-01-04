import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TryCatchStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Codeswag Actionsheet',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash', 
          handler: () => {
            console.log('the delete button has been clicked!');
          }
        }, {
          text: 'Play',
          handler: () => {
            console.log('The play button has been clicked!');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('The share button has been clicked!');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('the close button has been clicked!');
          }
        }
      ],
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: false,
      keyboardClose: false,
      mode: 'md'
    });

    actionSheet.present();

    actionSheet.onWillDismiss().then(() => {
      console.log('the action sheet is about to close');
    });

    actionSheet.onDidDismiss().then(() => {
      console.log('the action sheet has already closed');
    });
  }

}
