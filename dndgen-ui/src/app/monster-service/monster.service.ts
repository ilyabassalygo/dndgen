import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Monster } from '../model/monster.model';

@Injectable()
export class MonsterService {

  constructor(private http: HttpClient) { }

  private monsterUrl = '/api/monster';

  monsters: Monster[];

  public getMonsters(): Monster[]{
    this.http.get<Monster[]>(this.monsterUrl).subscribe(data => {this.monsters = data});
    return this.monsters;
  };

  public getMonster(monster){
    return this.http.get<Monster>(this.monsterUrl + "/" + monster.id);
  };

  public deleteMonster(monster) {
    return this.http.delete(this.monsterUrl + "/" + monster.id);
  };

  public createMonster(monster) {
    return this.http.post<Monster>(this.monsterUrl, monster);
  };
}
