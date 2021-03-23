module.exports = (sequelize, DataTypes) => {
    const JobType = sequelize.define('JobType', {
        
        retroFit: {
            type: DataTypes.BOOLEAN,
        },
        newConstruction: {
            type: DataTypes.BOOLEAN,
        },
        repairWork: {
            type: DataTypes.BOOLEAN,
        },
        originatedAsSvcCall: {
            type: DataTypes.BOOLEAN,
        },
        marketingOriginationInternet: {
            type: DataTypes.BOOLEAN,
        },
        marketingOriginationReferral: {
            type: DataTypes.BOOLEAN,
        },
        notes: {
            type: DataTypes.STRING,
        },
    });
   
    return JobType;
};
