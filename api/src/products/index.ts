import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import { validateTitle } from "./validation";
import { searchByTitle } from "./productHandler";
const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await axios.get("https://dummyjson.com/products")
        res.json({ products: result?.data?.products })
    } catch (error) {
        res.send("something went wrong")
    }
})


router.get("/:title", validateTitle, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = await axios.get("https://dummyjson.com/products")
        const result = searchByTitle(data, req.params.title)
        res.json({ result })
    } catch (error) {
        res.send("something went wrong")
    }
})

router.post("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await axios.get("https://dummyjson.com/products")
        res.json({ products: result?.data?.products })
    } catch (error) {
        res.send("something went wrong")
    }
})
router.put("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await axios.get("https://dummyjson.com/products")
        res.json({ products: result?.data?.products })
    } catch (error) {
        res.send("something went wrong")
    }
})
router.delete("/delete", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await axios.get("https://dummyjson.com/products")
        res.json({ products: result?.data?.products })
    } catch (error) {
        res.send("something went wrong")
    }
})


export default router;
