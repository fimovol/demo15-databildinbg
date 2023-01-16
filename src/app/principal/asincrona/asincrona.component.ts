import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css']
})
export class AsincronaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  array = [
    {
      id:"1",
      nombre:"javier",
      apellido:"sanchez",
      carrera: "front end"
    }
  ]
  nombre=""
  apellido=""
  carrera=""
  objeto = {
    id:"",
    nombre:"",
    apellido:"",
    carrera: ""
  }
  agregar(){
    let variable=this.array.length+1
    let string = variable.toString()
    this.objeto = {
      id: string,
      nombre:this.nombre,
      apellido:this.apellido,
      carrera: this.carrera
    }
    this.array.push(this.objeto)
  }
  eliminar(id=0){
    
      let ass = this.array.findIndex(object => {
        if(object.id===undefined){
          return object.id === id;
        }
        return -1
      });
      this.array.splice(ass, 1);
      }
}
