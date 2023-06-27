import { Request, Response, NextFunction } from "express";

const requestStarted = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toISOString()}: => Request Started ${req.path}`)
    next()
}

export { requestStarted }