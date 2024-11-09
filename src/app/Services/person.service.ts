import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClient) { }


  AddPerson(person: Person) : Observable<Person>
  {
    return this.httpClient.post<Person>("https://localhost:7020/api/Person/Create", person, {responseType:'json'});
  }

  getPerson(personId: number) : Observable<Person>
  {
    return this.httpClient.get<Person>(`https://localhost:7020/api/Person/GetPersonById/${personId}`, {responseType:'json'});
  }

  updatePerson(person: Person) : Observable<Person>
  {
    return this.httpClient.put<Person>(`https://localhost:7020/api/Person/Update`,person, {responseType:'json'});
  }

  deletePerson(personId: number) : Observable<string>
  {
    return this.httpClient.delete(`https://localhost:7020/api/Person/Delete/${personId}`,{responseType:'text'});
  }
}
