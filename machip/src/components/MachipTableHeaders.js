const MachipTableHeaders = {
    delivery_terms:
        [
            "id",
            "isActive",
            "description",
            "createdOn",
            "createdBy",
            "modifiedOn",
            "modifiedBy",
        ],
    sales_orders:
        [
            "id",
            "company",
            "Gross Value",
            "Status",
            "Date",
            "",
        ],
    purchase_orders:
        [
            "id",
            "company",
            "Gross Value",
            "Status",
            "Date",
        ],
    goods_receipt:
        [
            "id",
            "company",
            "description",
            "quantity",
            "original quantity",
            "open quantity",
        ],
    warehouses:
        [
            "id",
            "description",
        ],
    warehouse_items:
        [
            "description",
            "stock",
        ],
 };

export default MachipTableHeaders;

