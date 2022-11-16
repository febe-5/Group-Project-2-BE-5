const Metode = require("../models/metode");

module.exports = {
  getAllMetode: async (req, res) => {
    const data = await Metode.find({});
    res.json({
      message: "Get data success",
      data,
    });
  },

  postMetode: (req, res) => {
    const data = req.body;
    // console.log(data);
    const metode = new Metode(data);
    console.log(metode);
    metode.save();
    res.json({
      message: "Post data success",
      data,
    });
  },

  getMetodeByID: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const data = await Metode.findById(id);
    res.json({
      message: "Get data success",
      data,
    });
  },

  delAllMetode: (req, res) => {},

  delMetodeByID: (req, res) => {},
};
