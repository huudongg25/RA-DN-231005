import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";

const User = sequelize.define('User', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg'
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {
    timestamps: true
});


export default User