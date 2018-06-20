import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Monster } from '../model/monster.model';
import { FullMonster } from '../model/fullmonster.model';

@Injectable()
export class MonsterService {

  constructor(private http: HttpClient) { }

  private monsterUrl = '/api/monster';

  public getMonstersCount(){
    let count: number = 0;
    this.http.get<number>(this.monsterUrl + "/count").subscribe(data => {
      count = data
    })
    return count;
  };

  public getMonsters(pageSize: number, page: number){
    let params = new HttpParams();
    params = params.set("pageSize", pageSize.toString());
    params = params.set("page", page.toString());
    return this.http.get<Monster[]>(this.monsterUrl, {params}); 
  };

  public getMonster(monster){
    return this.http.get<Monster>(this.monsterUrl + "/" + monster.id);
  };

  public getMonsterByName(monster){
    return this.http.get<Monster>(this.monsterUrl + "/by/" + monster.name);
  };

  public getFullMonster(id: number) {
    return this.http.get<FullMonster>(this.monsterUrl + "/" + id);
  };

  public deleteMonster(monster) {
    return this.http.delete(this.monsterUrl + "/" + monster.id);
  };

  public createMonster(monster) {
    return this.http.post<Monster>(this.monsterUrl, monster);
  };
}
