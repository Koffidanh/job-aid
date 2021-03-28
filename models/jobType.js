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
        JobStreetAddress: {
            type: DataTypes.STRING,
        },
        JobStreetAddressL2: {
            type: DataTypes.STRING,
        },
        JobCity: {
            type: DataTypes.STRING,
        },
        JobState: {
            type: DataTypes.STRING,
        },
        JobZipCode: {
            type: DataTypes.INTEGER,
        },
    });

    return JobType;
};
