import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Monster } from '../model/monster.model';

@Injectable()
export class MonsterService {

  constructor(private http: HttpClient) { }

  private monsterUrl = '/api/monster';

  public getMonstersCount(){
    let pomogite: number = 0;
    this.http.get<number>(this.monsterUrl + "/count").subscribe(data => {
      pomogite = data
      console.log("pomogite " + pomogite)
    })
    return pomogite;
  };

  public getMonsters(pageSize: number, page: number){
    console.log(page)
    let params = new HttpParams();
    params = params.set("pageSize", pageSize.toString());
    params = params.set("page", page.toString());
    return this.http.get<Monster[]>(this.monsterUrl, {params}); 
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
