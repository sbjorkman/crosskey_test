
export interface Fund {
  instrumentId: string;
  isin: string;
  fundName: string;
  fundType: string;
  estimationDate: number;
  rate: number;
  change1y: number;
  currency: string;
  availableForMonthlySaving: boolean;
  redemptionMinFee: Fee;
  redemptionPercent: number | null;
  subscriptionMinFee: Fee;
  subscriptionPercent: number | null;
  subscriptionMinValue: Fee;
  investmentClass: string | null;
  permissions: Permissions;
  buyCommissions: number | null;
  sellCommissions: number | null;
  change1m: number;
  change3m: number;
  change3y: number;
  minimumCommission: number | null;
  technicalCommission: number | null;
  technicalCommissionUp: number | null;
  sellCommission: number | null;
  administrativeFee: number;
  startDate: number;
  yearHigh: number;
  yearLow: number;
  graphImageLink: string | null;
  documents: Document[];
  fundCompany: string;
  startValue: number;
  closePrice: number;
  latestClosePriceDate: number;
  countDecimals: number;
}

export interface Fee {
  amount: number;
  currency: string;
  empty: boolean;
}

export interface Permissions {
  allowedToBuy: boolean;
  allowedToSell: boolean;
  allowedToSwap: boolean;
  allowedForWatchlist: boolean;
  allowedForDetailedInformation: boolean;
  allowedToTrade: boolean;
}

export interface Document {
  url: string;
  title: string;
}
export interface Fund {
    instrumentId: string;
    isin: string;
    fundName: string;
    fundType: string;
    estimationDate: number;
    rate: number;
    change1y: number;
    currency: string;
    availableForMonthlySaving: boolean;
    redemptionMinFee: Fee;
    redemptionPercent: number | null;
    subscriptionMinFee: Fee;
    subscriptionPercent: number | null;
    subscriptionMinValue: Fee;
    investmentClass: string | null;
    permissions: Permissions;
    buyCommissions: number | null;
    sellCommissions: number | null;
    change1m: number;
    change3m: number;
    change3y: number;
    minimumCommission: number | null;
    technicalCommission: number | null;
    technicalCommissionUp: number | null;
    sellCommission: number | null;
    administrativeFee: number;
    startDate: number;
    yearHigh: number;
    yearLow: number;
    graphImageLink: string | null;
    documents: Document[];
    fundCompany: string;
    startValue: number;
    closePrice: number;
    latestClosePriceDate: number;
    countDecimals: number;
  }
