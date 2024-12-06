const userModel = require('../models/users');
const bcrypt = require('bcrypt');

async function adminAccount() {
    try {
        const existingadmin = await userModel.findOne({ userName: "gaurav88" });
        if (!existingadmin) {
            const hashedPassword = await bcrypt.hash("1234", 10);
            const admin = new userModel({
                name: "Gaurav Raj",
                userName: "gaurav88",
                password: hashedPassword,
                email: "gauravsingh52881@gmail.com",
                contact: "+91-9717916469",
                address: "Agra",
                pincode: 282005,
                role: "admin"
            });
            const savedAdmin = await admin.save();
            console.log("Admin account created");
        }
    } catch (error) {
        log.error("Error login admin account", error);
    }
}

module.exports = { adminAccount };