import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  //modificacion del contructor para q no salga el boton login private route: ActivatedRoute
  //se suscribe a los parametros que trae la ruta private route: Router
  constructor(public router: Router) {
   
  }

  ngOnInit(): void {
  }

}
