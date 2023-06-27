import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import axios from "axios";
dotenv.config()
// const express = require("express")
const app = express()

app.get("/health-check", (req: Request, res: Response, next: NextFunction) => {
    res.send("Api is running!")
})

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toISOString()}: => Request Started ${req.path}`)
    next()
})
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("x-request-id", Date.now())
    next()
})
app.use((req: Request, res: Response, next: NextFunction) => {
    const { apiKey } = req.query
    if (apiKey === process.env.ApiKey) {
        next()
    } else {
        console.log(`Token is invalid`, res.getHeader("x-request-id"))
        res.status(401).send("User is not authorized!")
    }
})

app.get("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await axios.get("https://dummyjson.com/products")
        res.json({ products: result?.data?.products })
    } catch (error) {
        res.send("something went wrong")
    }
})
app.get("/users", (req: Request, res: Response, next: NextFunction) => {
    for (let index = 0; index < 9999999999; index++) {
    }
    res.send("Users..!")
})


app.listen(process.env.PORT, () => {
    console.log(`Api is running on ${process.env.PORT}`)
})
