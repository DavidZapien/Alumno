import { Component, OnInit } from '@angular/core';
import { alumno } from '../alumno';
import { ALUMNO } from '../mock-alumnos';

@Component({
selector: 'app-alumnos',
templateUrl: './alumnos.component.html',
styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos = ALUMNO;
  selectedAlumno: alumno;

constructor() { }
ngOnInit() {
}

onSelect(alumno: alumno): void {
  this.selectedAlumno = alumno;

}

}