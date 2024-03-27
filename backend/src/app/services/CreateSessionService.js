import { startOfHour, parseISO, isBefore } from 'date-fns'


import Client from '../models/Client'
import Session from '../models/Session'

import AppError from "../../shared/AppError";



class CreateSessionService {
    async run({ coach_id, client_id, start, duration }) {
        const isCoach = await Client.findOne({ where: { id: coach_id, coach: true } })

        if (!isCoach) {
            throw new AppError('You can only create session with coachs')
        }

        const isUser = await Client.findOne({ where: { id: client_id, coach: false } })
        if (!isUser) {
            throw new AppError('You need to be a client to create a session with coachs')
        }

        const hourStart = startOfHour(parseISO(start))

        if (isBefore(hourStart, new Date())) {
            throw new AppError('Past date are not permitted')
        }

        const checkAvailability = await Session.findOne({
            where:
            {
                coach_id,
                canceled_at: null,
                start: hourStart
            }
        })

        if (checkAvailability) {
            throw new AppError('Appointment date is not available', 412)
        }

        const session = await Session.create({
            client_id,
            coach_id,
            duration,
            start: hourStart
        })

        return session
    }
}

export default new CreateSessionService()