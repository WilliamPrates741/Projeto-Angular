import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { listAudioProducts } from "../../mock/audio";
import { listCadeirasProducts } from "../../mock/cadeiras";
import { listCelularProducts } from "../../mock/celular";
import { listComputadoresProducts } from "../../mock/computadores";
import { listEletrodomesticosProducts } from "../../mock/eletrodomesticos";
import { listGamesProducts } from "../../mock/games";
import { listHardwareProducts } from "../../mock/hardware";
import { listPerifericosProducts } from "../../mock/perifericos";
import { listProjetoresProducts } from "../../mock/projetores";
import { listTVProducts } from "../../mock/tv";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = {
    title: history.state.title,
    products: history.state.products
  };

  constructor(private route: Router) {
  }

  navigateToProducts() {
    this.route.navigate(['products'])
  }

  selectAudio() {
    this.navigateToProducts()
    this.products = { title: 'AUDIO', products: listAudioProducts }
  }

  selectCadeiras() {
    this.navigateToProducts()
    this.products = { title: 'CADEIRAS', products: listCadeirasProducts }
  }

  selectCelular() {
    this.navigateToProducts()
    this.products = { title: 'CELULAR', products: listCelularProducts }
  }

  selectComputadores() {
    this.navigateToProducts()
    this.products = { title: 'COMPUTADORES', products: listComputadoresProducts }
  }

  selectEletrodomesticos() {
    this.navigateToProducts()
    this.products = { title: 'ELETRODOMESTICOS', products: listEletrodomesticosProducts }
  }

  selectGames() {
    this.navigateToProducts()
    this.products = { title: 'GAMES', products: listGamesProducts }
  }

  selectHardware() {
    this.navigateToProducts()
    this.products = { title: 'HARDWARE', products: listHardwareProducts }
  }

  selectPerifericos() {
    this.navigateToProducts()
    this.products = { title: 'PERIFERICOS', products: listPerifericosProducts }
  }

  selectProjetores() {
    this.navigateToProducts()
    this.products = { title: 'PROJETORES', products: listProjetoresProducts }
  }

  selectTV() {
    this.navigateToProducts()
    this.products = { title: 'TV', products: listTVProducts }
  }

  ngOnInit(): void {}
}
