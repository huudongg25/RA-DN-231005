import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import User from "./user.model";


const Information = sequelize.define('Information', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

Information.belongsTo(User,  { foreignKey: 'userId', onDelete: "CASCADE", onUpdate: "CASCADE"})
User.hasOne(Information, { foreignKey: 'userId'})

export default Information