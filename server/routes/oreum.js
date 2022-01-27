const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Oreum } = require("../models/Oreum");

//=================================
//             Oreum
//=================================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/", (req, res) => {
  // 받아온 정보들을 DB에 넣어 준다.
  const oreum = new Oreum(req.body);

  oreum.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/oreums", (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let term = req.body.searchTerm;

  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      findArgs[key] = req.body.filters[key];
    }
  }

  if (term) {
    // oreum collection에 들어 있는 모든 상품 정보를 가져오기
    Oreum.find(findArgs)
      .find({ title: { $regex: term }, description: { $regex: term } })
      .populate("writer")
      .skip(skip)
      .limit(limit)
      .exec((err, oreumInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res
          .status(200)
          .json({ success: true, oreumInfo, postSize: oreumInfo.length });
      });
  } else {
    // oreum collection에 들어 있는 모든 상품 정보를 가져오기
    Oreum.find(findArgs)
      .populate("writer")
      .skip(skip)
      .limit(limit)
      .exec((err, oreumInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res
          .status(200)
          .json({ success: true, oreumInfo, postSize: oreumInfo.length });
      });
  }
});

router.get("/oreums_by_id", (req, res) => {
  let oreumId = req.query.id;

  Oreum.find({ _id: oreumId })
    .populate("writer")
    .exec((err, oreum) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, oreum });
    });
});

module.exports = router;
