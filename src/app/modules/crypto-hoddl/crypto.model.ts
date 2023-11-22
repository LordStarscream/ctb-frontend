export interface WalletOverview {
  Currency: string,
  Value: string,
  Ticker: string,
  FiatValue: string,
  FiatTicker: string
  Wallets: Wallet[]
}

export interface Wallet {
  Id : number,
  Name:string,
  Value:string,
  FiatValue:string,
}

export interface ReportOverview {
  Id: number,
  Year: number,
  Account: any
}

export interface ReportEntry {
  Value: number,
  Asset: string,
  InDate: string,
  OutDate: string,
  SL: string,
  Proceed: string,
  Costbase: number,
  Profit: number
}

export interface Transaction {
  Date: string,
  Type: TransactionType,
  Wallet: string,
  In: string,
  Out: string,
  Worth: string
}

export interface ImportTransaction {
  Date: string,
  Type: string,
  Wallet: string,
  In: string,
  Out: string
}

export enum TransactionType{
  Buy,
  Sell,
  Transaction,
  Gift,
  Earning,
  Lost
}
