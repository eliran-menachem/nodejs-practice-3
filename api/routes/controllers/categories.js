module.exports = {
    getAllCategories: (req, res) => {
        res.status(200).json({
            message: 'get all categories'
        })
    },
    createCategory: (req, res) => {
        res.status(200).json({
            message: 'Create a new category'
        })
    },
    updateCategory: (req, res) => {
        const categoryId = req.params.categoryId
        res.status(200).json({
            message: `Update category ${categoryId}`
        })
    },
    deleteCategory: (req, res) => {
        const categoryId = req.params.categoryId
        res.status(200).json({
            message: `Delete category ${categoryId}`
        })
    }

}