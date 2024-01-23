import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";

const User = sequelize.define('User', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});


export default User