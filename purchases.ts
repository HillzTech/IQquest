// src/purchases.ts
import Purchases, { CustomerInfo } from 'react-native-purchases';

const REVENUECAT_API_KEY = 'goog_xPhhFyZWbrmRZoMWRJqXyZHZzqi';

export const PRODUCTS = [
  { id: 'iqquest_score_1000', title: '1000 Coins', price: '$1.49', coins: 1000 },
  { id: 'iqquest_score_5000', title: '5000 Coins', price: '$4.49', coins: 5000 },
  { id: 'iqquest_score_10000', title: '10000 Coins', price: '$8.99', coins: 10000 },
];

export const initializePurchases = () => {
  Purchases.configure({ apiKey: 'goog_xPhhFyZWbrmRZoMWRJqXyZHZzqi' });

};

export const purchaseProduct = async (productId: string) => {
  try {
    const { customerInfo, productIdentifier } = await Purchases.purchaseProduct(productId);
    return { customerInfo, productIdentifier };
  } catch (e) {
    throw e;
  }
};

export const restorePurchases = async (): Promise<CustomerInfo> => {
  const customerInfo = await Purchases.restorePurchases();
  return customerInfo;
};
