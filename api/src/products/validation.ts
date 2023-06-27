
import zod from "zod"

const titleSchema = zod.object({
    title: zod.string().max(20).min(3)
})

function validateTitle(req, res, next) {
    try {
        titleSchema.parse(req.params)
        return next()
    } catch (error) {
        console.log(error)
        // return next(error) // call error middleware explicitly 
        return res.status(400).send("something went wrong")
    }
}

export { validateTitle }