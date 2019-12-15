module.exports = (sequelize, DataTypes) => {
  const SalesOrders = sequelize.define(
    "SalesOrders",
    {
      picking_list: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
      }
    },
    { onUpdate: "CASCADE", onDelete: "CASCADE" }
  );
  return SalesOrders;
};
