import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service'; // Importando o ProdutoService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  produtos: any[] = []; // Variável para armazenar os produtos

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(
      (dados) => {
        this.produtos = dados; // Atribuindo os produtos recebidos
      },
      (erro) => {
        console.error('Erro ao carregar produtos:', erro);
      }
    );
  }
}
