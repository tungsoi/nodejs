require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    logging: true,
});

sequelize.authenticate()
    .then(() => {
        console.log(`[Database] ${DATABASE_NAME} successfully`);
    })
    .catch(err => {
        console.error(`[Database] ${DATABASE_NAME} failed`, err);
    });

const Category = require('../../models/CategoryModel')(sequelize, DataTypes);
const Voucher = require('../../models/VoucherModel')(sequelize, DataTypes);
const Product = require('../../models/ProductModel')(sequelize, DataTypes);
const Order = require('../../models/OrderModel')(sequelize, DataTypes);
const OrderItem = require('../../models/OrderItemModel')(sequelize, DataTypes);
const OrderVoucher = require('../../models/OrderVoucherModel')(sequelize, DataTypes);
const OrderShipping = require('../../models/OrderShippingModel')(sequelize, DataTypes);
const Customer = require('../../models/CustomerModel')(sequelize, DataTypes);
const User = require('../../models/UserModel')(sequelize, DataTypes);
const Cart = require('../../models/CartModel')(sequelize, DataTypes);
const CartItem = require('../../models/CartItemModel')(sequelize, DataTypes);

module.exports = {sequelize, Category, Voucher, Product, Order, OrderItem, OrderVoucher, OrderShipping, Customer, User, Cart , CartItem };