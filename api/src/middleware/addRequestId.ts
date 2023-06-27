import { Request, Response, NextFunction } from "express";

const addRequestId = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("x-request-id", Date.now())
    next()
}

export { addRequestId }