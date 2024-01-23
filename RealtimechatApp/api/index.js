const express = require("express");
const cors = require('cors');

const axios = require('axios');
const app = express();
app.use(express.json())
app.use(cors({
    origin: true
}));
app.post("/auth", async (req, res) => {
    const {
        username,
        firstname,
        lastname
    } = req.body
    try {
       // const avatar = await axios.get(`https://ui-avatars.com/api/?name=${firstname??""}+${lastname??""}`);
        const r = await axios.put("https://api.chatengine.io/users/", {
            username,
            secret: username,
            first_name: firstname ?? username,
            last_name: lastname ?? username,
            //avatar: avatar.data
        }, {
            headers: {
                "private-key": "c7323b7d-48a2-4600-9e66-75515b6e71a0"
            }
        })
        return res.status(r.status).json(r.data)
    } catch (error) {
        console.log(error);
        return res.status(404).json(error);
    }
})
app.listen(2343, () => {
    console.log("Server Start");
})
