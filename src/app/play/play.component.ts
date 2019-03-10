import { Component, OnInit, Inject } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { Subject } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  almost_msg: string = '';
  message: string = 'Play to Choose';
  private users = [];
  private selected: string;
  addUser(value) {
    if(value != '') {
      this.users.push(value);
    }
  }  
  ngOnInit() {
  }
  
  randomSelect(data) {
    let rnd_i = Math.floor(Math.random() * data.length);
    this.selected = data[rnd_i]; 
  }

  onPlay(_this, x) {
    _this.message = "Picking it ..."
    x = x +1;
    _this.randomSelect(_this.users)
    if(x<150) {
      console.log("step 1")
      setTimeout(_this.onPlay.bind(null, _this, x), 20)
    }
    else if((x >= 150) && (x <=200)) {
      console.log("step 2")
      setTimeout(_this.onPlay.bind(null, _this, x), 50)
    }
    else if((x >= 200) && (x <=230)) {
      console.log("step 3")
      setTimeout(_this.onPlay.bind(null, _this, x), 100)
    }
    else if((x >= 230) && (x <=250)) {
      console.log("step 4")
      _this.almost_msg = _this.almost_msg + " Oh"
      setTimeout(_this.onPlay.bind(null, _this, x), 500)
    }
    else {
      console.log("finito")
      _this.playAudio();
      _this.openModal();
    }
  
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../assets/audio/alarm.wav";
    audio.load();
    audio.play();
  }

openModal() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
    id: 1,
    title: this.selected
  };
  const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog was closed' )
    console.log(result)
  });
}

}

