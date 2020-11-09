import { Observable } from 'rxjs';
import { CepModel } from './../models/Cep.model';
import { CepService } from './../services/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  cep: number;
  model: CepModel;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;

  constructor(
    private cepService: CepService
    ) {}

  ngOnInit(): void {
  }

  public pegarCep(cep: number): void {
    this.cepService.getCep(cep).subscribe(data => {
        this.logradouro = data.logradouro;
        this.bairro = data.bairro;
        this.cidade = data.localidade;
        this.estado = data.uf;
      });
    }
}

