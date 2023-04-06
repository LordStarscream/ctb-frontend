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

export interface Transaction {
  Value: number,
  Asset: string,
  InDate: string,
  OutDate: string,
  SL: string,
  Proceed: string,
  Costbase: number,
  Profit: number
}
