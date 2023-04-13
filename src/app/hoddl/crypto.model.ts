export interface Wallet {
  Id : number,
  Name:string,
  Currency:string,
  Ticker: string
  Value:string,
  FiatValue:string,
  FiatTicker:string,
  JobTitle:string
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

export enum TransactionType{
  Buy,
  Sell,
  Transaction,
  Gift,
  Earning,
  Lost
}
