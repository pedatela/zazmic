import * as Yup from 'yup'

export default async (req, res, next) => {
    try {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            coach: Yup.boolean('coach field is a boolean').required('coach is a required field'),
        });
        await schema.validate(req.body, { abortEarly: false })
        return next()
    } catch (err) {
        return res.status(422).json({ error: 'Validation fails', messages: err.inner })
    }
}