const db = process.env.MONGODB_URI;

const options = { useNewUrlParser: true };

module.exports = [db, options];
