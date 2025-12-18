//Database configuration for MongoDB using Mongoose
const mongoose = require('mongoose');

module.exports = async()=>{
     console.log('preconnection.');
    //await mongoose.connect(process.env.MONGO_URI, {});
    await mongoose.connect('mongodb+srv://unaiskamle:unaisk1989@unaiscluster.r4n5di5.mongodb.net/OnlinePublishingPlatform?appName=UnaisCluster', {})
    console.log('MongoDB connected successfully');
}