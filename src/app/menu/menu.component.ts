import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { listAudioProducts } from "../mock/audio";
import { listCadeirasProducts } from "../mock/cadeiras";
import { listCelularProducts } from "../mock/celular";
import { listComputadoresProducts } from "../mock/computadores";
import { listEletrodomesticosProducts } from "../mock/eletrodomesticos";
import { listGamesProducts } from "../mock/games";
import { listHardwareProducts } from "../mock/hardware";
import { listPerifericosProducts } from "../mock/perifericos";
import { listProjetoresProducts } from "../mock/projetores";
import { listTVProducts } from "../mock/tv";

interface IProducts {
    image: string;
    name: string;
    price: number;
  }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) {
  }

  navigateToProducts(title: string, products: IProducts[]) {
    this.route.navigate(['products'], { state: { title, products } })
  }

  selectAudio() {
    this.navigateToProducts('AUDIO', listAudioProducts)
  }

  selectCadeiras() {
    this.navigateToProducts('CADEIRAS', listCadeirasProducts)
  }

  selectCelular() {
    this.navigateToProducts('CELULAR', listCelularProducts)
  }

  selectComputadores() {
    this.navigateToProducts('COMPUTADORES', listComputadoresProducts)
  }

  selectEletrodomesticos() {
    this.navigateToProducts('ELETRODOMESTICOS', listEletrodomesticosProducts)
  }

  selectGames() {
    this.navigateToProducts('GAMES', listGamesProducts)
  }

  selectHardware() {
    this.navigateToProducts('HARDWARE', listHardwareProducts)
  }

  selectPerifericos() {
    this.navigateToProducts('PERIFERICOS', listPerifericosProducts)
  }

  selectProjetores() {
    this.navigateToProducts('PROJETORES', listProjetoresProducts)
  }

  selectTV() {
    this.navigateToProducts('TV', listTVProducts)
  }

  ngOnInit(): void {}
}
