export interface ReportEntry {
  BuyDate: Date,
  SellDate: Date,
  Asset: string, //Currency
  Ammount: number,
  Holding: string,// short / long
  InExchange: string,
  OutExchange: string,
  Proceed: string,
  Costbase: number,
  Profit: number
}
