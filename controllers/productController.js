const products = [
    { id: 1, name: 'Pencil', color: 'Green'},
    { id: 2, name: 'Book', color: 'Blue' },
    { id: 3, name: 'Eraser', color: 'White' },
    { id: 4, name: 'Pen', color: 'Black'},
];

exports.getAllProducts = (req, res) => {
    res.json({
        message: 'List all product',
        data: products,
    });
};

exports.getProductByName = (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({
            message: 'Query parameter "name" is needed.',
        });
    }

    const product = products.find((p) => p.name.toLowerCase() === name.toLowerCase());

    if (product) {
        res.json({
            message: 'Product is found',
            data: product,
        });
    } else {
        res.status(404).json({
            message: `Product named "${name}" is not found.`,
        });
    }
};

exports.getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);

    if (product) {
        res.json({
            message: 'Product is found',
            data: product,
        });
    } else {
        res.status(404).json({
            message: 'Product is not found',
        });
    }
};