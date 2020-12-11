import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController){

  }
  ngOnInit(){
    this.notesService.load();
  }
/*
   addNote(){

    this.alertCtrl.create({
      header: 'nuova nota',
      message: 'Inserisci un titolo',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'elimina'
        },
        {
          text: 'salva',
          handler: (data) => {
            this.notesService.createNote(data.title);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }
*/
  goToLogin(){
    this.navCtrl.navigateRoot('login');
  }

}
