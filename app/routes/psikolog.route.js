const express = require("express");
const router = express.Router();

const {
    getAllPsikolog,
    getIdPsikolog,
    addPsikolog,
    updatePsikolog,
    deletePsikolog,
    deleteAllPsikolog,
} = require("../controllers/psikolog.controller");

router.get('/psikolog', getAllPsikolog);
router.get('/psikolog/:id', getIdPsikolog);
router.post('/psikolog', addPsikolog);
router.put('/psikolog/:id', updatePsikolog);
router.delete('/psikolog/:id', deletePsikolog);
router.delete('/psikolog', deleteAllPsikolog);

module.exports = router;