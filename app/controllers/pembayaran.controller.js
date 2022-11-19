const Pembayaran = require("../models/pembayaran");

module.exports = {
  getAllPembayaran: async (req, res) => {
    try {
      const data = await Pembayaran.find()
        .populate("id_psikolog")
        .populate("id_user");
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

  postPembayaran: async (req, res) => {
    try {
      const data = req.body;
      //data = req.user
      const pembayaran = new Pembayaran(data);
      pembayaran.save();
      const dataPsikolog = await pembayaran.populate("id_psikolog");
      const { nama_psikolog, no_telp } = dataPsikolog.id_psikolog;
      res.json({
        message: "Pembayaran Berhasil!",
        data: { nama_psikolog, no_telp: `wa.me/${no_telp}` },
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

  delAllPembayaran: async (req, res) => {
    try {
      await Pembayaran.deleteMany();
      res.json({
        message: "Delete all data success",
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  delPembayaranByID: async (req, res) => {
    try {
      const { id } = req.params;
      await Pembayaran.findByIdAndDelete(id);
      res.json({
        message: "Delete data success",
      });
    } catch (error) {
      res.status(500).send({
        message: "opps something error!",
        error: error.message,
      });
    }
  },
};
