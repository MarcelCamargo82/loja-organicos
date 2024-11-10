import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProdutoService } from './produto.service'; // Importando o serviço que você criou

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ProdutoService], // Adicionando o serviço na lista de provedores
  bootstrap: [AppComponent],
})
export class AppModule {}
