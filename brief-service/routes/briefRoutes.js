const express = require('express');
const router = express.Router();
const briefController = require('../controllers/briefController');

router
  .route('/')
  .get(briefController.getAllBriefs)
  .post(briefController.createBrief);

router
  .route('/:id')
  .get(briefController.getBriefById)
  .put(briefController.updateBrief)
  .delete(briefController.deleteBrief);

module.exports = router;
