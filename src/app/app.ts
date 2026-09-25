import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  imports: [RouterOutlet, HomeComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conceitoini-app');

  submit(event: any) {
    console.log(" Teste event com sucesso! ", event);
  }  

  logar(event: string) {
    console.log(" Valor evento: ", event);
  }
}
