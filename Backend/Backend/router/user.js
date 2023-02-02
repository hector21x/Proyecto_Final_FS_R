const express = require('express');
const { getUser, getUsers, createUser, updateUser, deleteUser } = require('../controller/user.js');


const router = express.Router();


router.get('/', getUsers);

router.get('/:id', getUser);

router.post("/", createUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;