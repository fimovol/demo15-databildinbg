import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { FormsModule } from '@angular/forms';
import { RetoComponent } from './reto/reto.component';
import { AsincronaComponent } from './asincrona/asincrona.component';



@NgModule({
  declarations: [
    Pagina1Component,
    RetoComponent,
    AsincronaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Pagina1Component,
    RetoComponent,
    AsincronaComponent
  ]
})
export class PrincipalModule { }
