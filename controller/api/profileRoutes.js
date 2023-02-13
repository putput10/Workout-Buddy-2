const router = require("express").Router();
const { Profile, Workout, Post } = require("../../models");


//Get a profile by id
router.get("/:id", async (req, res) => {
  try {
    const profileData = await Profile.findAll({
      attributes: {exclude:['password']},
      where: {id:req.params.id},
      include: [{
        model:Post,
        attributes: {exclude:['profileId']}
      },
    {
      model:Workout,
      attributes: {exclude:['profileId']}
    }],
      // include: [{model:Post}],
    });
    if (!profileData) {
      res.status(404).json({ message: "No User found with this id!" });
      return;
    }
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Create a new profile
router.post("/", async (req, res) => {
  try {
    // create a new profile
    const profileData = await Profile.create(req.body);
    
    req.session.save(() => {
      req.session.profileId = profileData.id;
      req.session.loggedIn = true;

      res.status(200).json(profileData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted username
    const ProfileData = await Profile.findOne({ where: { username: req.body.username } });

    if (!ProfileData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
        // Verify the posted password with the password store in the database
        const validPassword = await ProfileData.checkPassword(req.body.password);

        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
            // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.profileId = ProfileData.id;
      req.session.loggedIn = true;
      
      res.json({ user: ProfileData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});



// // Login user
// router.post('/login', async (req, res)=> {
//   try {
//     const profileData = await Profile.findone({
//       where: {
//         username: req.body.username,
//       },
//     });
//     if (!profileData) {
//       res.status(400).json({ message: 'No user found with this username. Please try again.'});
//       return;
//     }
//     const correctPwd = await profiledata.checkpassword(req.body.password);
//     if (!correctPwd) {
//       res.status(400).json({ message: 'No user found with this password. Please try again. '});
//       return;
//     }
//     req.session.save(() => {
//       req.session.profileId = profileData.id;
//       req.session.loggedin = true;
//       res.status(200).json({username: profileData, message: 'Welcome.'});
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// //Update an existing profile
// router.put("/:id", async (req, res) => {
//   try {
//   // update a category by its `id` value
//     const profileData = await Profile.update(req.body,{
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!profileData) {
//       res.status(404).json({ message: "No Profile found with this id!" });
//       return;
//     }
//     res.status(200).json(profileData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res. status(404).end();
  }
});

module.exports = router;
