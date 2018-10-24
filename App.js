import { UserScreen } from './src/Modal/UserScreen';
import { VendorScreen } from './src/Modal/VendorScreen';
import { ProductScreen } from './src/Modal/ProductScreen';
import { PurchaseRequestScreen } from './src/Modal/PurchaseRequestScreen';
import { LineItemScreen } from './src/Modal/LineItemScreen';
import { createMaterialTopTabNavigator } from 'react-navigation';

export default createMaterialTopTabNavigator(
  {
    Users: UserScreen,
    Vendors: VendorScreen,
    Products: ProductScreen,
    PurchaseRequests: PurchaseRequestScreen,
    LineItems: LineItemScreen
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 8,
        color: "#fdcb6e"
      },
      style: {
        backgroundColor: 'black'
      },
    }
  });