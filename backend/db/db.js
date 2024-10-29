// // db/db.js
// const mongoose = require('mongoose');

// const db = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log('MongoDB connected');
        
//         // Add indexes for better query performance
//         const Income = require('../models/incomeModel');
//         const Expense = require('../models/ExpenseModel');
        
//         // Ensure indexes exist for user field
//         await Income.collection.createIndex({ user: 1 });
//         await Expense.collection.createIndex({ user: 1 });
        
//         console.log('Database indexes ensured');
//     } catch (error) {
//         console.log('DB connection error:', error.message);
//         process.exit(1); // Exit process with failure
//     }
// };

// module.exports = { db };




const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected');

        // Add indexes for better query performance
        const Income = require('../models/incomeModel');
        const Expense = require('../models/ExpenseModel');

        // Ensure indexes exist for user field and categories
        await Income.collection.createIndex({ user: 1 });
        await Expense.collection.createIndex({ user: 1 });
        await Expense.collection.createIndex({ categories: 1 }); // Add index for categories array
        
        console.log('Database indexes ensured');
    } catch (error) {
        console.log('DB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = { db };