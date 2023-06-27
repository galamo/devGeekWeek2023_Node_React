import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import productsRouter from "./products";
import usersRouter from "./users"
import { requestStarted } from "./middleware/requestStarted";
import { addRequestId } from "./middleware/addRequestId";
dotenv.config()
// const express = require("express")
const app = express()

app.use(requestStarted)
app.use(addRequestId)
app.get("/health-check", (req: Request, res: Response, next: NextFunction) => {
    res.send("Api is running!")
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
app.use("/products", productsRouter)
app.use("/users", usersRouter)

app.listen(process.env.PORT, () => {
    console.log(`Api is running on ${process.env.PORT}`)
})
