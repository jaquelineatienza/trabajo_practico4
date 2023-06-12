const express = require('express');
const router = express.Router();
const{get,delet,post,put}=require("../controllers/controllers")


router.get('/',get);
router.put ('/put',put);
router.post('/post',post);
router.delete('/delete',delet);
module.exports=router;