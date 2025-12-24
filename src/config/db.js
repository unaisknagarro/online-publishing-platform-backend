//Database configuration for MongoDB using Mongoose
const mongoose = require('mongoose');

module.exports = async () => {
    console.log('preconnection.');
    //await mongoose.connect(process.env.MONGO_URI, {});
    await mongoose.connect('mongodb+srv://unaiskamle:unaisk1989@unaiscluster.r4n5di5.mongodb.net/OnlinePublishingPlatform?appName=UnaisCluster', {}).then(() => {
        console.log('MongoDB connected successfully');
    })
        .catch(err => {
            console.error('❌ MongoDB connection failed:', err.message);
            process.exit(1);
        });


}