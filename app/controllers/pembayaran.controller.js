const Pembayaran = require("../models/pembayaran");

module.exports = {
  getAllPembayaran: async (req, res) => {
    const data = await Pembayaran.find().populate("id_metode");
    res.json({
      message: "Get data success",
      data,
    });
  },

  postPembayaran: (req, res) => {
    const data = req.body;
    const pembayaran = new Pembayaran(data);
    pembayaran.save();
    res.json({
      message: "Post data success",
      data,
    });
  },

  getPembayaranByID: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const data = await Pembayaran.findById(id);
    res.json({
      message: "Get data success",
      data,
    });
  },

  delAllPembayaran: (req, res) => {},

  delPembayaranByID: (req, res) => {},
};
