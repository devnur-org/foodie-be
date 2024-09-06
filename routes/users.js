const express = require("express");
const router = express.Router();

const users = [
    {
        id: 'johndoe',
        first_name: "John",
        last_name: "Doe",
        email: "john@doe.com",
    },
    {
        id: 'maryjohn',
        first_name: "Mary",
        last_name: "John",
        email: "mary@doe.com"
    },
    {
        id: 'williamjohn',
        first_name: "William",
        last_name: "John",
        email: "william@doe.com"
    }
]

router.get("/", (req, res) => {
    res.json({
        status: true,
        message: "Retrieved all users",
        data: users
    })
})

router.post("/", (req, res) => {
    const body = req.body;
    users.push(body)
    res.json({
        status: true,
        message: `Added ${body.first_name} ${body.last_name} to users.`,
        data: users
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updatedUsers = users.map(user => {
        if (user.id === id) {
            return { ...user, ...body }
        }
    })
    res.json({
        status: true,
        message: `Updated user with id ${id}`,
        data: updatedUsers.find((user) => user.id === id)
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const updatedUsers = users.filter(user => user.id !== id)
    res.json({
        status: true,
        message: `Deleted user with id ${id}`,
        data: updatedUsers
    })
})

module.exports = router;
