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
    this.monsterService.getMonsters().subscribe(data => {this.monsters = data});
  }

  findMonsters():void {
   this.monsterService.getMonsters().subscribe(data => {this.monsters = data});
  }

  findMonster():void {
    this.monsterService.getMonster(this.foundMonster).subscribe(data => {this.foundMonster = data});
  }
  
  deleteMonster(monster: Monster): void {
    this.monsterService.deleteMonster(monster)
    .subscribe( data => {
      if (monster.id == this.foundMonster.id) {
        this.foundMonster = new Monster();
      }
      this.monsters = this.monsters.filter( m => m !== monster);
    });
    
  };
}
