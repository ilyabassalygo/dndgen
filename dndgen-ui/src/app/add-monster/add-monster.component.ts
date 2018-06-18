import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Monster } from '../model/monster.model';
import { MonsterService} from '../monster-service/monster.service';

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html',
  styleUrls: ['./add-monster.component.css']
})
export class AddMonsterComponent implements OnInit {

  monster: Monster = new Monster();
  succesMessage: string;
  errorMessage: string;

  constructor(private router: Router, private monsterService: MonsterService) { }

  ngOnInit() {
    this.clearMessages();
  }

  createMonster(): void {
    this.clearMessages();
    this.monsterService.createMonster(this.monster)
      .subscribe( data => {
        this.succesMessage = "Monster created";
      },
      err => {
        if (err.status == 400) {
          this.errorMessage = "Error while creatuing monster"
        }
      }
    );
  };

  clearMessages(): void {
    this.succesMessage = "";
    this.errorMessage = "";
  } 

}
