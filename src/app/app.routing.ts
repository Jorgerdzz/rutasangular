import { Home } from "./components/home/home";
import { Cine } from "./components/cine/cine";
import { Musica } from "./components/musica/musica";

import { Routes, RouterModule } from "@angular/router";

import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound.component/notfound.component";
import { NumeroDobleComponent } from "./components/numero.doble.component/numero.doble.component";

const appRoutes: Routes = [
    {path: "", component: Home},
    {path: "cine", component: Cine},
    {path: "musica", component: Musica},
    {path: "numerodoble", component:NumeroDobleComponent},
    {path: "**", component: NotfoundComponent}
]

export const appRoutingProvider: any[] = []

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);