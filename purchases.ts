import Purchases, { CustomerInfo, PurchasesStoreProduct } from 'react-native-purchases';

const REVENUECAT_API_KEY = 'goog_xPhhFyZWbrmRZoMWRJqXyZHZzqi';

export const PRODUCTS = [
  { id: 'iqquest_score_1000', title: '1000 Coins', price: '$1.49', coins: 1000 },
  { id: 'iqquest_score_5000', title: '5000 Coins', price: '$4.49', coins: 5000 },
  { id: 'iqquest_score_10000', title: '10000 Coins', price: '$8.99', coins: 10000 },
];

export const initializePurchases = async () => {
  try {
    await Purchases.configure({ apiKey: 'goog_xPhhFyZWbrmRZoMWRJqXyZHZzqi' });
    console.log('RevenueCat initialized with API key:', 'goog_xPhhFyZWbrmRZoMWRJqXyZHZzqi');
  } catch (error) {
    console.error('Failed to initialize RevenueCat:', error);
    throw error;
  }
};

export const purchaseProduct = async (productId: string): Promise<{ customerInfo: CustomerInfo, productIdentifier: string }> => {
  try {
    console.log('Attempting to purchase product with identifier:', productId);

    // Fetch the product information
    const products: PurchasesStoreProduct[] = await Purchases.getProducts([productId]);

    // Log the fetched products for debugging
    console.log('Fetched products:', products);

    // Find the correct product
    const productToBuy = products.find(product => product.identifier === productId);

    if (!productToBuy) {
      throw new Error(`Product with identifier ${productId} not found`);
    }

    // Make the purchase
    const { customerInfo, productIdentifier } = await Purchases.purchaseProduct(productId);
    console.log('Purchase successful:', productIdentifier);
    return { customerInfo, productIdentifier };
  } catch (error) {
    // Log the error for debugging
    console.error('Purchase failed:', error);
    throw error;
  }
};

export const restorePurchases = async (): Promise<CustomerInfo> => {
  try {
    const customerInfo = await Purchases.restorePurchases();
    console.log('Restored purchases successfully.');
    return customerInfo;
  } catch (error) {
    console.error('Failed to restore purchases:', error);
    throw error;
  }
};


















































