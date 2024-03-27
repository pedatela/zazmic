import * as Yup from 'yup'

export default async (req, res, next) => {
    try {
        const schema = Yup.object().shape({
            client_id: Yup.string().required(),
            coach_id: Yup.string().required(),
            duration: Yup.number().required(),
            start: Yup.date().required(),
        })
        await schema.validate(req.body, { abortEarly: false })
        return next()
    } catch (err) {
        return res.status(400).json({ error: 'Validation fails', messages: err.inner })
    }
}