import express, { Request, Response, NextFunction } from "express";
// const express = require("express")

const app = express()

app.get("/health-check", (req: Request, res: Response, next: NextFunction) => {
    res.send("Api is running!")
})

app.listen(3500, () => {
    console.log("Api is running on port 3500")
})
