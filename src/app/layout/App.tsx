import { Route, Routes } from 'react-router-dom';
import AccountPage from '../../feature/account/AccountPage';
import DashboardPage from '../../feature/dashboard/DashboardPage';
import ExpensePage from '../../feature/expense/ExpensePage';
import InventoryPage from '../../feature/inventory/InventoryPage';
import LedgerPage from '../../feature/ledger/LedgerPage';
import OrderPage from '../../feature/order/OrderPage';
import PosPage from '../../feature/pos/PosPage';
import CreateProductPage from '../../feature/product/CreateProductPage';
import ProductPage from '../../feature/product/ProductPage';
import PurchasePage from '../../feature/purchase/PurchasePage';
import { AccountPageType } from '../types/IAccounts';
import { CREATE_PATH, EXPENSE_PATH, HOME_PATH, INVENTORY_PATH, LEDGER_PATH, LOGIN_PATH, ORDER_PATH, POS_PATH, PRODUCT_PATH, PURCHASE_PATH, REGISTER_PATH } from '../utilities/stringsConstant';

function App() {
  return (
    <Routes>
      <Route path={LOGIN_PATH} element={<AccountPage accountPageType={AccountPageType.LOGIN_PAGE} />} />
      <Route path={REGISTER_PATH} element={<AccountPage accountPageType={AccountPageType.REGISTER_PAGE} />} />
      <Route path={HOME_PATH} element={<DashboardPage />} />
      <Route path={PRODUCT_PATH} element={<ProductPage />} />
      <Route path={`${PRODUCT_PATH}${CREATE_PATH}`} element={<CreateProductPage />} />
      <Route path={LEDGER_PATH} element={<LedgerPage />} />
      <Route path={POS_PATH} element={<PosPage />} />
      <Route path={ORDER_PATH} element={<OrderPage />} />
      <Route path={PURCHASE_PATH} element={<PurchasePage />} />
      <Route path={EXPENSE_PATH} element={<ExpensePage />} />
      <Route path={INVENTORY_PATH} element={<InventoryPage />} />
    </Routes>
  );
}

export default App;
