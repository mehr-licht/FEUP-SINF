const BASE_API = "http://localhost:3001/api";

export const API_ACCESS_ROUTES = {
  token: `${BASE_API}/token/`,
  sales: `${BASE_API}/sales_orders/`,
  purchases: `${BASE_API}/purchase_orders/`,
  deliveryTerms: `${BASE_API}/delivery_terms/`,
  warehouseItems: `${BASE_API}/warehouse_items/`,
  goodsReceipt: `${BASE_API}/goods_receipt/`,
  warehouses: `${BASE_API}/warehouses/`
};
