import { routing, appRoutingProvider } from './app.routing';

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Home } from './components/home/home';
import { Musica } from './components/musica/musica';
import { Cine } from './components/cine/cine';
import { MenuComponent } from './components/menu.component/menu.component';
import { NotfoundComponent } from './components/notfound.component/notfound.component';
import { NumeroDobleComponent } from './components/numero.doble.component/numero.doble.component';

@NgModule({
  declarations: [
    App,
    Home,
    Musica,
    Cine,
    MenuComponent,
    NotfoundComponent,
    NumeroDobleComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
