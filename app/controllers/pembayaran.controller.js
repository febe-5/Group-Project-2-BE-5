const Pembayaran = require("../models/pembayaran");

module.exports = {
  getAllPembayaran: async (req, res) => {
    try {
      const data = await Pembayaran.find().populate("id_metode");
      res.json({
        message: "Get data success",
        data,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  postPembayaran: (req, res) => {
    try {
      const data = req.body;
      const pembayaran = new Pembayaran(data);
      pembayaran.save();
      res.json({
        message: "Post data success",
        data,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  updatePembayaranById: async (req, res) => {
    try {
      const { id } = req.params;
      const update = req.body;
      const data = await Pembayaran.findByIdAndUpdate(id, update);
      res.json({
        message: "Update data success",
        data,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  getPembayaranByID: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Pembayaran.findById(id);
      res.json({
        message: "Get data success",
        data,
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  delAllPembayaran: (req, res) => {},

  delPembayaranByID: (req, res) => {},
};
