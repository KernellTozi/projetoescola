import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { EditarPage } from '../editar/editar';
import { ExcluirPage } from '../excluir/excluir';
import { SelecaoPage } from '../selecao/selecao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
cadastro() {
  this.navCtrl.setRoot(CadastrarPage);
}

editar() {
  this.navCtrl.setRoot(EditarPage);
}
excluir() {
  this.navCtrl.setRoot(ExcluirPage);
}

escolha() {
  this.navCtrl.setRoot(SelecaoPage);
}
}
