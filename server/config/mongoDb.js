let mongoose = require('mongoose')

async function mongoDb(url) {

    try {
        console.log(url);

        await mongoose.connect('mongodb+srv://hasifazad:5BdRtnQajKLA7pBT@cluster0.9i6hcim.mongodb.net/mythra');
        console.log("mongoDb is Connected");
    } catch (err) {
        console.error("Connection Error", err);
        // process.exit(1);
    }
}

module.exports = mongoDb

