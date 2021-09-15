import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private personaService: PersonaService) { }
 
  ngOnInit() {
    this.persona = new Persona;
  }
 
  add(){
    if((this.persona.sexo=="femenino") || (this.persona.sexo=="F")){
      this.persona.pulsacion=(220-this.persona.edad)/10;
    }else if((this.persona.sexo=="masculino") || (this.persona.sexo=="M")){
      this.persona.pulsacion=(210-this.persona.edad)/10;
    }
    alert('persona registrada correctamente...'+ JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }
}
