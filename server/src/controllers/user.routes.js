import routerLogics from "./RouterLogics.js";

import { Router } from "express";

const router = Router();

router.post('/register', (req, res) => {
    const data = req.body;
    let status = routerLogics("register", data);

    if (status) res.status(201).json({
        request: "register",
        method: "POST",
        condition: true
    });

    else res.status(500).json({
        request: "register",
        method: "POST",
        condition: false
    })

    console.log(`Requested register - ${req.ip}`);
});

export default router;