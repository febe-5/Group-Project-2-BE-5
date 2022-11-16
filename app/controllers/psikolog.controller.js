const Psikolog = require("../models/psikolog");
const Layanan = require("../models/Layanan");

module.exports = {
    getAllPsikolog: async (req, res) => {
        try {
            const psikolog = await Psikolog.find().populate("layanan");

            res.status(200).send({
                message: "Psikolog All Successfully",
                data: psikolog,
            })
        } catch (err) {
            res.status(500).send({
                message: err.message || "Internal Server Error"
            })
        }
    },

    getIdPsikolog: async (req, res) => {
        try {
            const { id } = req.params
            const getPsikolog = await Psikolog.findById(id).populate("layanan").exec();

            res.status(200).send({
                message: "Get Id Psikolog Successfully",
                data: getPsikolog
            })
        } catch (err) {
            res.status(500).send({
                message: err.message || "Internal Server Error"
            })
        }
    },

    addPsikolog: async (req, res) => {
        try {
            const { nama_psikolog, no_telp, pengalaman, jadwal, harga, layanan} = req.body

            const newDataPsikolog = {
                nama_psikolog,
                no_telp,
                pengalaman,
                jadwal,
                harga,
                layanan
            }

            const newPsikolog = await Psikolog.save(newDataPsikolog)
            console.log(newPsikolog)

            res.status(201).send({
                message: "Add Psikolog Successfully",
                data: newPsikolog,
            })
        } catch (err) {
            res.status(500).send({
                message: err.message || "Internal Server Error"
            })
        }
    },

    updatePsikolog: async (req, res) => {
        try {
            const { id } = req.params
            const { nama_psikolog, no_telp, pengalaman, jadwal, harga } = req.body

            const updatePsikolog = {
                nama_psikolog,
                no_telp,
                pengalaman,
                jadwal,
                harga
            }

            const update = await Psikolog.findByIdAndUpdate(id, updatePsikolog).exec();

            res.status(200).send({
                message: "Update Psikolog Successfully",
                data: update
            })
        } catch (err) {
            res.status(500).send({
                message: err.message || "Internal Server Error"
            })
        }
    },

    deletePsikolog: async (req, res) => {
        try{
            const { id } = req.params;
            const deletePsikologID = await Psikolog.findByIdAndDelete(id).exec();

            res.status(200).send({
                message: "Delete Psychologist Data Success",
            })
        } catch (err) {
            res.status(500).send({
                message: err.message || "Internal Server Error"
            })
        }
    },
}