import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    for (let index = 0; index < 9999999999; index++) {
    }
    res.send("Users..!")
})
export default router;