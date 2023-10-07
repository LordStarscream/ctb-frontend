export interface TransactionImportModel {
  id: number;
  type: string;
  exchange: string;
  inValue: number;
  inCurrency: string;
  outValue: number;
  outCurrency: string;
  fee: number;
  feeCurrency: string;
  dateTime: number[];
  comment: string;
}
export class TransactionImport implements TransactionImportModel{
  id: number;
  type: string;
  exchange: string;
  inValue: number;
  inCurrency: string;
  outValue: number;
  outCurrency: string;
  fee: number;
  feeCurrency: string;
  dateTime: number[];
  date: Date;
  comment: string;
  // Konstruktor, der die LocalDateTime in Date umwandelt
  constructor(data: any) {
    this.id = data.id;
    this.type = data.type;
    this.exchange = data.exchange;
    this.inValue = data.inValue;
    this.inCurrency = data.inCurrency;
    this.outValue = data.outValue;
    this.outCurrency = data.outCurrency;
    this.fee = data.fee;
    this.feeCurrency = data.feeCurrency;
    this.comment = data.comment;
    this.dateTime = data.dateTime;
    this.date = TransactionImport.convertToLocalDate(data.dateTime);
  }

  static convertToLocalDate(dateTimeArray: number[]): Date {
    // Wandeln Sie das LocalDateTime-Array in ein Date-Objekt um
    // Beachten Sie, dass Sie die richtige Reihenfolge der Werte im Array beachten müssen
    const [year, month, day, hour, minute, second, millisecond] = dateTimeArray;
    return new Date(year, month - 1, day, hour, minute, second, millisecond);
  }

  // Methode zum Umwandeln von Date in LocalDateTime-Array
  convertToDateArray(date: Date): number[] {
    return [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ];
  }

  // Methode zum Erstellen eines Datenobjekts für die Übertragung an das Backend
  toRequestBody(): any {
    return {
      id: this.id,
      type: this.type,
      exchange: this.exchange,
      inValue: this.inValue,
      inCurrency: this.inCurrency,
      outValue: this.outValue,
      outCurrency: this.outCurrency,
      fee: this.fee,
      feeCurrency: this.feeCurrency,
      dateTime: this.convertToDateArray(this.date), // Konvertieren Sie das Date-Objekt in ein Array
      comment: this.comment
    };
  }
}

