const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const users = require('../../Users');

/*
 * TODO: Make helper function for querying users to replace "found" methods
*/

/*
  * GET display all users
*/
router.get('/', (req, res) => {
  res.json(users);
})

/*
  * GET user by ID
*/
router.get('/:id', (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with id of ${req.params.id}` });
  }
});

/*
* POST create new user
*/
router.post("/", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  // Verify both name and email are entered
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: "Must include a name and email"});
  }

  // Add new user to users array
  users.push(newUser);

  // Respond with JSON of all users
  res.json(users);
})


/*
  * PUT user update handler
*/
router.put("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const upduser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = upduser.name ? upduser.name : user.name;
        user.email = upduser.email ? upduser.email : user.email;

        res.json({ msg: "user updated", user });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with id of ${req.params.id}` });
  }
});

/*
 * DELETE user
*/
router.delete("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: "User deleted",
      users: users.filter(
        user => user.id === parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `No member with id of ${req.params.id}` });
  }
})

module.exports = router;