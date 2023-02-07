const router = require("express").Router();
const { Post } = require("../../models");

//Create a new post
router.post("/", async (req, res) => {
    try {
      // create a new post
      const postData = await Post.create(req.body);
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//Get a profile by id
router.get("/:id", async (req, res) => {
    try {
      const postData = await Post.findAll( {
        where: {id:req.params.id},
      });
      if (!postData) {
        res.status(404).json({ message: "No User found with this id!" });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;