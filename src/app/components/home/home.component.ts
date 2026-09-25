import { Component, inject } from '@angular/core';
import { EnviaformularioService } from '../../services/enviaformulario.service';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class Home {
  private enviarFormulariosService = inject(EnviaformularioService);
  tstbooleano = false;
  num = "2026";
  idButton = "ntw";
  mostrarteste = false;
  autor = "ThranduilSDR";
  finalidade = "Validação Conceitos Iniciais Angular ";
  listItens = ["monitor", "teclado", "mouse", "gabinete", "fonte", "placa de vídeo", "placa mãe", "processador", "memória ram", "ssd"];
  listitensid = [{id: 1, nome: "monitor"}, {id: 2, nome: "teclado"}, {id: 3, nome: "mouse"}, {id: 4, nome: "gabinete"}, {id: 5, nome: "fonte"}, {id: 6, nome: "placa de vídeo"}, {id: 7, nome: "placa mãe"}, {id: 8, nome: "processador"}, {id: 9, nome: "memória ram"}, {id: 10, nome: "ssd"}];


  atualizarTstBooleano(valor: boolean) 
  {
    this.tstbooleano = valor;
  }

  submitForm() {this.enviarFormulariosService.enviaInfoBackend("Informações do formulário enviadas com sucesso!");}

  submit() {
    console.log(" Teste realizado com sucesso! ");
  } 

  submiteve(event: any) {
    console.log(" Teste realizado com sucesso! ", event);
  }
}
