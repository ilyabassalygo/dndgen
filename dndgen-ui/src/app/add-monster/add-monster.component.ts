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

  constructor(private router: Router, private monsterService: MonsterService) { }

  ngOnInit() {
  }

  createMonster(): void {
    this.monsterService.createMonster(this.monster)
      .subscribe( data => {
        alert("monster created");
      });
  };

}
