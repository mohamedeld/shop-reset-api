// const mongoose = require("mongoose");
// const SubCategory = require("../core/models/subcategory.model");
// const subcategoryService = require("../core/services/subcategory.service.js");

// exports.addSubCategory = (req, res, next) => {
//   console.log("asdsadsadsa");
//   subcategoryService
//     .addSubCategory({ body: req.body })
//     .then((subcategory) => {
//       res.status(200).json({ message: "subcategory is added", subcategory });
//     })
//     .catch((err) => next(err));
// };
// exports.getSubCategory = async (req, res, next) => {
//   try {
//     let subcategories = await SubCategory.find();
//     res.json(subcategories);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
//   // console.log("dsadaaaaaaaaa");
//   // Category.find()
//   //   .then((data) => {
//   //     response.status(200).json(data);
//   //   })
//   //   .catch((erorr) => next(erorr));
// };
// exports.getSubCategoryById = async (req, res, next) => {
//   try {
//     let subcategory = await SubCategory.find({ _id: req.params.id });
//     res.json(subcategory);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// exports.updateSubCategory = async (req, res, next) => {
//   try {
//     const subcategory = await SubCategory.updateOne(
//       {
//         _id: req.params.id,
//       },
//       {
//         _id: req.body.id,
//         name: req.body.name,
//         description: req.body.description,
//         thumbnail: req.body.thumbnail,
//       }
//     );
//     // console.log("hhhhhhhhhhhhhh");
//     res.json(subcategory);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.deleteSubCategory = async (req, res, next) => {
//   try {
//     const subcategory = await SubCategory.deleteOne({ _id: req.params.id });
//     if (!subcategory) {
//       return res.status(404).json({ error: "subcategory not found" });
//     }
//     res.json(subcategory);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
const {
  getAll,
  createOne,
  deleteOne,
  updateOne,
  getOne,
} = require("../core/services/subcategory.service");
module.exports.getAll = (req, res, next) => {
  getAll()
    .then((subcategories) => {
      res.status(200).json({
        message: "get all subcategories",
        subcategories,
      });
    })
    .catch((err) => next(err));
};
module.exports.createOne = (req, res, next) => {
  createOne(req.body)
    .then((subcategory) => {
      res.status(200).json({
        message: "create new subcategory",
        subcategory,
      });
    })
    .catch((err) => next(err));
};
module.exports.updateOne = (req, res, next) => {
  updateOne(req.params["id"], req.body)
    .then((subcategory) => {
      res.status(200).json({
        message: "update subcategory",
        subcategory,
      });
    })
    .catch((err) => next(err));
};
module.exports.getOne = (req, res, next) => {
  getOne(req.params["id"])
    .then((subcategory) => {
      res.status(200).json(subcategory);
    })
    .catch((err) => next(err));
};
module.exports.deleteOne = (req, res, next) => {
  deleteOne(req.params["id"])
    .then((subcategory) => {
      res.status(200).json({
        message: "delete a subcategory",
        subcategory,
      });
    })
    .catch((err) => next(err));
};
