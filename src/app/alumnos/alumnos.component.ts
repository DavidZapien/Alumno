import { Component, OnInit } from '@angular/core';
import { alumno } from '../alumno';
@Component({
selector: 'app-alumnos',
templateUrl: './alumnos.component.html',
styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
alumno: alumno= {
id: 1,
name: 'David'
};
constructor() { }
ngOnInit() {
}
}