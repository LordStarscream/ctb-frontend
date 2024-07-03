export interface DealModel{
    id?: number;
    openTime?: string;
    type: string;
    size?: number;
    item: string;
    price?: number;
    orderNumber?: number;
    comment: string;
    entry: string;
    commission?: number;
    swap?: number;
    profit?: number;
}

export class Deal implements DealModel{
  id?: number;
  openTime?: string;
  type: string;
  size?: number;
  item: string;
  price?: number;
  orderNumber?: number;
  comment: string;
  entry: string;
  commission?: number;
  swap?: number;
  profit?: number;

  // Konstruktor, der die LocalDateTime in Date umwandelt
  constructor(data: DealModel) {
    this.id = data.id;
    this.openTime = data.openTime;
    this.type = data.type;
    this.size = data.size;
    this.item = data.item;
    this.price = data.price;
    this.orderNumber = data.orderNumber;
    this.comment = data.comment;
    this.entry = data.entry;
    this.commission = data.commission;
    this.swap = data.swap;
    this.profit = data.profit;
  }

  static convertToLocalDate(dateTimeArray: number[]): Date {
    // Wandeln Sie das LocalDateTime-Array in ein Date-Objekt um
    // Beachten Sie, dass Sie die richtige Reihenfolge der Werte im Array beachten müssen
    const [year, month, day, hour, minute, second, millisecond] = dateTimeArray;
    return new Date(year, month - 1, day, hour, minute, second, millisecond);
  }

  // Methode zum Umwandeln von Date in LocalDateTime-Array
  static convertToDateArray(date: Date): number[] {
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
      openTime: this.openTime,
      type: this.type,
      size: this.size,
      item: this.item,
      price: this.price,
      orderNumber: this.orderNumber,
      comment: this.comment,
      entry: this.entry,
      commission: this.commission,
      swap: this.swap,
      profit: this.profit
    };
  }
}
