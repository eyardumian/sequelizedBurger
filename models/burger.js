module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  return Burger;
};
