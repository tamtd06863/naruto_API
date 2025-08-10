import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {characterItemModel, characterModel} from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class GokuService {
  myURL: string = 'https://dattebayo-api.onrender.com/characters?page=1&limit=30';
  personalData: string = 'https://dattebayo-api.onrender.com/characters/personal';
  constructor(private http: HttpClient) {

  }
  getData(){
    return this.http.get<characterModel>(this.myURL);
  }

  getPersonalData(){
    return this.http.get<characterModel>(this.personalData);
  }

  getCharacterById(id: number){
    return this.http.get<characterItemModel>(`https://dattebayo-api.onrender.com/characters/${id}`);
  }

}

