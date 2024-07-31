var express = require('express');
var router = express.Router();

const categoryPet = require('../model/CategoryPet');
const category = require('../model/category');
/* GET home page. */
router.post('/add',async function(req, res, next){
    try {
      const newCategory = new categoryPet(req.body);
      await newCategory.save();
      res.status(200).json({category: newCategory});
    } catch (error) {
      res.status(500).json('error: error')
    }
  });
  router.get('/list', async function(req, res, next) {
    try {
      var data = await categoryPet.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json({mess:"loi"} )
    }
    
  });
module.exports = router;