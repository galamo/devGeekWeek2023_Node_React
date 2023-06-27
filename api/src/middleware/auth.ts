import { Request, Response, NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const { apiKey, apikey } = req.query
    console.log(req.query)
    if (apiKey === process.env.ApiKey) {
        next()
    } else {
        console.log(`Token is invalid`, res.getHeader("x-request-id"))
        res.status(401).send("User is not authorized!")
    }
}
export { auth }