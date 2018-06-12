import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Monster } from '../model/monster.model';
import { MonsterService} from '../monster-service/monster.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  foundMonster: Monster = new Monster();
  monsters: Monster[];

  constructor(private router: Router, private monsterService: MonsterService) { }

  ngOnInit() {
    this.monsters = this.monsterService.getMonsters();
  }

  findMonster():void {
    this.monsterService.getMonster(this.foundMonster).subscribe(data => {this.foundMonster = data});
  }
  
  deleteMonster(monster: Monster): void {
    this.monsterService.deleteMonster(monster)
    .subscribe( data => {
      this.monsters = this.monsters.filter( m => m !== monster);
    });
  };
}
