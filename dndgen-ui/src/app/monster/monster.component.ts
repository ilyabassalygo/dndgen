import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Monster } from '../model/monster.model';
import { MonsterService } from '../monster-service/monster.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  monsterCount: number = 324;
  currentPage: number = 0;
  pages: number[] = [];
  pageSize: number = 15;
  foundMonster: Monster = new Monster();
  monsters: Monster[];
  errorText: string;

  constructor(private router: Router, private monsterService: MonsterService) { }

  ngOnInit() {
    this.currentPage = 0;
    for (let i: number = 0; i < this.monsterCount / this.pageSize; i++) {
      this.pages.push(i + 1);
    }
    this.errorText = "";
    this.monsterService.getMonsters(this.pageSize, this.currentPage).subscribe(
      data => {
        this.monsters = data;
      }
    );
  }

  findMonsters(page: number): void {
    this.currentPage = page;
    this.monsterCount = this.monsterService.getMonstersCount()
    this.monsterService.getMonsters(this.pageSize, page - 1).subscribe(
      data => {
        this.monsters = data
      });
  }

  findMonster(): void {
    this.errorText = "";
    this.monsterService.getMonster(this.foundMonster).subscribe(
      data => {
        this.foundMonster = data
      },
      err => {
        if (err.status == 404) {
          this.errorText = "Monster with id " + this.foundMonster.id + " doesn't exist " + err.status;
        }
      }
    );
  }


  deleteMonster(monster: Monster): void {
    this.errorText = "";
    this.monsterService.deleteMonster(monster)
      .subscribe(data => {
        if (monster.id == this.foundMonster.id) {
          this.foundMonster = new Monster();
        }
        this.monsters = this.monsters.filter(m => m !== monster);
      },
      err => {
        if (err.status == 404) {
          this.errorText = "Monster with id " + this.foundMonster.id + " doesn't exist " + err.status;
        }
      });

  };
}
