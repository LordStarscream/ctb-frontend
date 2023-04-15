import { Component } from '@angular/core';
import { WalletOverview } from '../crypto.model';

@Component({
  selector: 'crypto-wallet-view',
  templateUrl: './crypto-wallet-view.component.html',
  styleUrls: ['./crypto-wallet-view.component.scss']
})
export class CryptoWalletViewComponent {

  public panelOpenState = false;

  walletOverview: WalletOverview[] = [{
    Currency: 'Bitcoin',
    Value: '0,30543',
    Ticker: 'BTC',
    FiatValue: '7918,17',
    FiatTicker: '€',
    Wallets: [{
      Id : 1,
      Name: 'Ledger - Hoddel BTC',
      Value: '0,30000',
      FiatValue: '7608,17'
    },
    {
      Id : 2,
      Name: 'Ledger - Ria',
      Value: '0,00220',
      FiatValue: '208,00'
    },
    {
      Id : 3,
      Name: 'Ledger - Franka',
      Value: '0,00220',
      FiatValue: '208,00'
    }]
  },
  {
    Currency: 'Cardano',
    Value: '4425',
    Ticker: 'ADA',
    FiatValue: '1554,82',
    FiatTicker: '€',
    Wallets: [{
      Id : 1,
      Name: 'Ledger - Hoddel ADA',
      Value: '1554,82',
      FiatValue: '1554,82'
    }]
  },
];

}
