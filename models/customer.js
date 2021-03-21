module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
        } ,
        lastName:{
             type: DataTypes.STRING,
             allowNull: false,
            },
        companyName: {
           type: DataTypes.STRING,
        },
        companyAddress: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        startDate: { 
            type: DataTypes.DATE,
        },
        endDate: { 
            type: DataTypes.DATE,
        },
        phase: {
            type: DataTypes.BOOLEAN,
        },
        class: {
            type: DataTypes.BOOLEAN,
        },
        complete: {
            type: DataTypes.BOOLEAN,
        },
    });
    Customer.associate = (models) => {
        //Adding a foreign key to customer
        Customer.belongsTo(models.JobType, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    return Customer;
};
