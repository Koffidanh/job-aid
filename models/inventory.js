// module.exports = (sequelize, DataTypes) => {
//     const Inventory = sequelize.define('Inventory', {

//         partId: {
//             type: DataTypes.INTEGER,
//         },
//         partName: {
//             type: DataTypes.STRING,
//         },
//         price: {
//             type: DataTypes.INTEGER,
//         },
//         measuredBy: {
//             type: DataTypes.STRING,
//         },
//         quantity: {
//             type: DataTypes.INTEGER,
//         },
//     });
//     Inventory.associate = (models) => {
//         // Adding a foreign key to Inventory
//         Inventory.hasMany(models.JobType, {
//             foreignKey: {
//                 allowNull: false,
//             },
//         });
//     };
//     return Inventory;
// };
