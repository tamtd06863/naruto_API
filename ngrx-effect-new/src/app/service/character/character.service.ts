import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharacterModel} from '../../models/character.model';
import {CharacterItemModel} from '../../models/characterItemModel.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}
    getAllCharacters() {
      return this.http.get<CharacterModel>('https://dragonball-api.com/api/characters?page=1&limit=100')
    }

    getCharacterById(id: number) {
      return this.http.get<CharacterItemModel>(`https://dragonball-api.com/api/characters/${id}`);
    }
  }

