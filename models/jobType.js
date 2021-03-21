module.exports = (sequelize, DataTypes) => {
    const JobType = sequelize.define('JobType', {
        
        heatingSyst: {
            type: DataTypes.BOOLEAN,
        },
        coolingSyst: {
            type: DataTypes.BOOLEAN,
        },
        ventilationSyst: {
            type: DataTypes.BOOLEAN,
        },
        plumbing: {
            type: DataTypes.BOOLEAN,
        },
        tuneUp: {
            type: DataTypes.BOOLEAN,
        },
        notes: {
            type: DataTypes.STRING,
        },
    });
    return JobType;
};
