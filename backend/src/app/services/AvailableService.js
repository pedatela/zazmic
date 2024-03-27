import { startOfDay, endOfDay, setHours, setMinutes, setSeconds, format, isAfter, parseISO } from 'date-fns'
import { Op } from 'sequelize'

import Session from '../models/Session'
class AvailableService {
    async run({ coach_id, date }) {
    
        const sessions = await Session.findAll({
            where: {
                coach_id,
                canceled_at: null,
                start: {
                    [Op.between]: [
                        startOfDay(parseISO(date)),
                        endOfDay(parseISO(date))
                    ]
                }
            }
        })

        const schedule = [
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00'
        ]

        const available = schedule.map(time => {
            const [hour, minute] = time.split(':')
            const value = setSeconds(setMinutes(setHours(parseISO(date), hour), minute),0)

            return {
                time,
                value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
                available: isAfter(value, new Date()) && !sessions.find(a => {
                    const date = new Date(Date.parse(a.start))
                    const [,,,,test] = date.toUTCString().split(' ')
                    return test.slice(0,5) === time
                })
            }
        });

        return available
    }
}

export default new AvailableService()