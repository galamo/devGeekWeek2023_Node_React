import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
dotenv.config()
// const express = require("express")
const app = express()

app.get("/health-check", (req: Request, res: Response, next: NextFunction) => {
    res.send("Api is running!")
})

app.listen(process.env.PORT, () => {
    console.log(`Api is running on ${process.env.PORT}`)
})
