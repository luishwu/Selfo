import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Menu } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { MenuService } from '../services/menu.service';
import { RestauranteService } from '../services/restaurante.service';
import { ComponentsModule } from '../components/components.module';
import { QRScanner } from '@ionic-native/qr-scanner';
import { UserService } from '../services/user.service';
import { ImageService } from '../services/image.service';
import { Camera } from '@ionic-native/camera';
import { PedidoService } from '../services/pedido.service';
import { PedidoactualService } from '../services/pedidoactual.service';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ComponentsModule,
    HomePageModule,
    LoginPageModule,
    PerfilPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService,
    MenuService,
    RestauranteService,
    QRScanner,
    UserService,
    ImageService,
    Camera,
    PedidoService,
    PedidoactualService,
  ]
})
export class AppModule {}
