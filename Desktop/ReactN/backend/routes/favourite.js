const router =require('express').Router();
const favouriteController = require('../controllers/favouriteController');


router.get("/find/:userId", favouriteController.getFavItem);
router.post("/", favouriteController.addToFav);
router.delete("/:FavouriteItemId", favouriteController.deleteFavItem)





module.exports = router;