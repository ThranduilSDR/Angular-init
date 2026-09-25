import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaformularioService {

        enviaInfoBackend(info: string) {
        console.log(" Enviando informações para o backend: ", info);
        }

}
