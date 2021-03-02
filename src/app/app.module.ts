import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    imports: [ //Classes nécessaires au fonctionnement du module
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
        PokemonsModule,
        LoginRoutingModule,
        AppRoutingModule
    ],

    declarations: [ //Classes de vues
        AppComponent,
        LoginComponent,
        PageNotFoundComponent
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }