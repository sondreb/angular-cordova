import { Component } from '@angular/core';
import * as bip38 from 'bip38';
import * as coininfo from 'city-coininfo';
import * as citylib from 'city-lib';
import * as bitoinmessage from 'bitcoinjs-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    console.log('bip38: ', bip38);
    console.log('coininfo: ', coininfo);
    console.log('citylib: ', citylib);
    console.log('bitoinmessage: ', bitoinmessage);
  }
}
