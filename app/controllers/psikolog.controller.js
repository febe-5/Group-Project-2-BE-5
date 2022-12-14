const Psikolog = require("../models/psikolog");
const Layanan = require("../models/layanan");

module.exports = {
  getAllPsikolog: async (req, res) => {
    try {
      const psikolog = await Psikolog.find().populate("layanan");

      res.status(200).send({
        status: "success",
        message: "Psikolog All Successfully",
        data: psikolog,
      });
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: err.message || "Internal Server Error",
      });
    }
  },

  getIdPsikolog: async (req, res) => {
    try {
      const { id } = req.params;
      const getPsikolog = await Psikolog.findById(id)
        .populate("layanan")
        .exec();

      res.status(200).send({
        status: "success",
        message: "Get Id Psikolog Successfully",
        data: getPsikolog,
      });
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: err.message || "Internal Server Error",
      });
    }
  },

  addPsikolog: async (req, res) => {
    try {
      const {
        nama_psikolog,
        no_telp,
        pengalaman,
        jadwal,
        harga,
        layanan,
      } = req.body;

      const newDataPsikolog = new Psikolog({
        nama_psikolog,
        no_telp,
        pengalaman,
        jadwal,
        harga,
        layanan: layanan._id,
      });

      const newPsikolog = await newDataPsikolog.save();
      const updateLayanan = await Layanan.updateMany(
        { _id: newPsikolog.layanan },
        { $addToSet: { layanan: newPsikolog._id } }
      );

      console.log(updateLayanan);
      console.log(newPsikolog);

      res.status(201).send({
        status: "success",
        message: "Add Psikolog Successfully",
        data: newPsikolog,
      });
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: err.message || "Internal Server Error",
      });
    }
  },

  updatePsikolog: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        nama_psikolog,
        no_telp,
        pengalaman,
        jadwal,
        harga,
        layanan,
      } = req.body;

      const updatePsikolog = {
        nama_psikolog,
        no_telp,
        pengalaman,
        jadwal,
        harga,
        layanan,
      };

      const update = await Psikolog.findByIdAndUpdate(
        id,
        updatePsikolog
      ).exec();

      res.status(200).send({
        status: "success",
        message: "Update Psikolog Successfully",
        data: update,
      });
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: err.message || "Internal Server Error",
      });
    }
  },

  deletePsikolog: async (req, res) => {
    try {
      const { id } = req.params;
      const deletePsikologID = await Psikolog.findByIdAndDelete(id).exec();

      res.status(200).send({
        status: "success",
        message: "Delete Psychologist Data Success",
      });
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: err.message || "Internal Server Error",
      });
    }
  },

  deleteAllPsikolog: async (req, res) => {
    try {
      const deleteAll = await Psikolog.deleteMany({});
      res.status(200).send({
        status: "success",
        message: "Delete All Psikolog Successfully",
        data: deleteAll,
      });
    } catch (err) {
      res.status(500).send({
        status: "fail",
        message: err.message || "Internal Server Error",
      });
    }
  },
};
