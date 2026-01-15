const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const fs = require("fs");
const path = require("path");

const User = require("./models/userModel")

// 1. Connect to MongoDB
const MONGO_URI = "mongodb://localhost:27017/Mithra"; // Change if needed

mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected to MongoDB")
    uploadUsers();

}).catch(err => console.error("MongoDB connection error:", err));


// 5. Hash passwords and save to MongoDB
async function uploadUsers() {

    // 4. Read users.json
    const usersFilePath = path.join(__dirname, "users.json");
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
    try {
        const saltRounds = 10;

        for (const userData of users) {
            const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

            const user = new User({
                username: userData.username,
                email: userData.email,
                password: hashedPassword
            });

            await user.save();
            console.log(`User ${user.username} saved`);
        }

        console.log("All users uploaded successfully");
    } catch (err) {
        console.error("Error uploading users:", err);
    } finally {
        mongoose.connection.close();
    }
}


