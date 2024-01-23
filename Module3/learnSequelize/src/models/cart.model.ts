import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import User from "./user.model";


const Cart = sequelize.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true
});

Cart.belongsTo(User,  { foreignKey: 'userId', onDelete: "CASCADE", onUpdate: "CASCADE"})
User.hasMany(Cart, { foreignKey: 'userId'})

export default Cart