const express = require('express');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Path to your Firebase private key JSON file
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Firestore database instance
const db = admin.firestore();

// Endpoint to retrieve user's recently visited products
app.get('/recently-visited', async (req, res) => {
    try {
        // Sample query to retrieve recently visited products from Firestore
        const querySnapshot = await db.collection('recentlyVisited').get();
        const recentlyVisitedProducts = [];
        querySnapshot.forEach(doc => {
            recentlyVisitedProducts.push(doc.data());
        });
        res.json(recentlyVisitedProducts);
    } catch (error) {
        console.error('Error retrieving recently visited products:', error);
        res.status(500).json({ error: 'An error occurred while retrieving recently visited products' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
