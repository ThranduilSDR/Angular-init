import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  tstbooleano = false;
  num = "2026";
  idButton = "ntw";
  mostrarteste = false;

  atualizarTstBooleano(valor: boolean) 
  {
    this.tstbooleano = valor;
  }



  submit() {
    console.log(" Teste realizado com sucesso! ");
  } 

  submiteve(event: any) {
    console.log(" Teste realizado com sucesso! ", event);
  }
}
