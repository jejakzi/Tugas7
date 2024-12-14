const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 9002;

app.use(express.json());
app.use('/product', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/product`);
});
