import Session from '../models/Session';
import CreateSessionService from '../services/CreateSessionService'

class SessionController {

  async store(req, res) {
    const { coach_id, start, client_id, duration } = req.body

    const session = await CreateSessionService.run({
      client_id,
      duration,
      coach_id,
      start
    })

    return res.status(201).json(session)
  }
}

export default new SessionController()