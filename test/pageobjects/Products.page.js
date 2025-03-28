import { $ } from '@wdio/globals';
import Page from './basepage.js';

class ProductsPage extends Page {
  get backpack() { return $('#add-to-cart-sauce-labs-backpack'); }
  get bikeLight() { return $('#add-to-cart-sauce-labs-bike-light'); }
  get boltShirt() { return $('#add-to-cart-sauce-labs-bolt-t-shirt'); }
  get fleeceJacket() { return $('#add-to-cart-sauce-labs-fleece-jacket'); }
  get onesie() { return $('#add-to-cart-sauce-labs-onesie'); }
  get redShirt() { return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'); }

  get removeBackpack() { return $('#remove-sauce-labs-backpack'); }
  get removeBikeLight() { return $('#remove-sauce-labs-bike-light'); }
  get removeBoltShirt() { return $('#remove-sauce-labs-bolt-t-shirt'); }
  get removeFleeceJacket() { return $('#remove-sauce-labs-fleece-jacket'); }
  get removeOnesie() { return $('#remove-sauce-labs-onesie'); }
  get removeRedShirt() { return $('[data-test="remove-test.allthethings()-t-shirt-(red)"]'); }

  async addAllToCart() {
    await this.backpack.click();
    await this.bikeLight.click();
    await this.boltShirt.click();
    await this.fleeceJacket.click();
    await this.onesie.click();
    await this.redShirt.click();
  }

  async removeAllFromCart() {
    await this.removeBackpack.click();
    await this.removeBikeLight.click();
    await this.removeBoltShirt.click();
    await this.removeFleeceJacket.click();
    await this.removeOnesie.click();
    await this.removeRedShirt.click();
  }
}

export default new ProductsPage();
