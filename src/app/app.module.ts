import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { EditarPage } from '../pages/editar/editar';
import { ExcluirPage } from '../pages/excluir/excluir';
import { SelecaoPage } from '../pages/selecao/selecao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastrarPage,
    EditarPage,
    ExcluirPage,
    SelecaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastrarPage,
    EditarPage,
    ExcluirPage,
    SelecaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
