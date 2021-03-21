module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
               
        partId:  {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
    });
    Inventory.associate = (models) => {
        // Adding a foreign key to Inventory
        Inventory.belongsTo(models.JobType, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    return Inventory;
};
