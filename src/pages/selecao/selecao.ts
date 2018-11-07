import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { EditarPage } from '../editar/editar';
import { ExcluirPage } from '../excluir/excluir';

/**
 * Generated class for the SelecaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecao',
  templateUrl: 'selecao.html',
})
export class SelecaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecaoPage');
  }

  cadastrar() {
    this.navCtrl.setRoot(CadastrarPage);
  }
  editar() {
    this.navCtrl.setRoot(EditarPage);
  }
  excluir() {
    this.navCtrl.setRoot(ExcluirPage);
  }

}
