import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './services/firestore/firestore.service';


export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyectoFirebase';

  constructor(){}
  items = '';
  characters = [{"nombre":"Cybill"},
  {"nombre":"Teodoor"},
  {"nombre":"Margot"},
  {"nombre":"Geneva"},
  {"nombre":"Elmer"},
  {"nombre":"Lena"},
  {"nombre":"Ernie"},
  {"nombre":"Kermy"},
  {"nombre":"Giorgia"},
  {"nombre":"Julio"},
  {"nombre":"Ludwig"},
  {"nombre":"Gert"},
  {"nombre":"Brady"},
  {"nombre":"Addia"},
  {"nombre":"Isabelita"},
  {"nombre":"Ebony"},
  {"nombre":"Ronni"},
  {"nombre":"Minny"},
  {"nombre":"Corrie"},
  {"nombre":"Carlota"},
  {"nombre":"Matthieu"},
  {"nombre":"Ahmed"},
  {"nombre":"Halley"},
  {"nombre":"Ronnie"},
  {"nombre":"Niko"},
  {"nombre":"Rhona"},
  {"nombre":"Elissa"},
  {"nombre":"Oralla"},
  {"nombre":"Cristabel"},
  {"nombre":"Neall"}]

  ngOnInit(): void {

  }
}
