import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import productsRouter from "./products";
import usersRouter from "./users"
import cors from "cors"
import { auth, addRequestId, requestStarted } from "./middleware";

dotenv.config()
// const express = require("express")
const app = express()
app.use(cors())
app.use(requestStarted)
app.use(addRequestId)
app.get("/health-check", (req: Request, res: Response, next: NextFunction) => {
    res.send("Api is running!")
})


app.use(auth)
app.use("/products", productsRouter)
app.use("/users", usersRouter)

app.use((error, req, res, next) => {
    res.status(500).send("Something went wrong!")
})

app.listen(process.env.PORT, () => {
    console.log(`Api is running on ${process.env.PORT}`)
})
