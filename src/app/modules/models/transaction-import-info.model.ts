import { Currency } from "./currency.model";
import { TransactionImport } from "./transaction-import.model";

export interface TransactionImportInfoModel {
  TransactionImport: TransactionImport;
  currency: Currency[];
  importSuccess: boolean;
}
