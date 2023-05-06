
const express = require('express')
const router = express.Router();


const {
    createProductReview,
    getProductReviews,
    deleteReview

} = require('../controllers/feedbackController')

const { isAuthenticatedUser} = require('../middlewares/auth')


router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)

module.exports = router;