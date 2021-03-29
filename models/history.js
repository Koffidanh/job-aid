// module.exports = (sequelize, DataTypes) => {
//     const History = sequelize.define('History', {

//         phase: {
//             type: DataTypes.BOOLEAN,
//         },
//         status: {
//             type: DataTypes.STRING,
//         },
//     });
//     History.associate = (models) => {
//         // Adding a foreign key to history
//         History.belongsTo(models.JobType, {
//             foreignKey: {
//                 allowNull: false,
//             },
//         });
//     };
//     return History;
// };
