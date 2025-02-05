import AvailableService from '../services/AvailableService'

class AvailableController {

  async index(req, res) {
    const { date } = req.query
    if (!date) {
      return res.status(400).json({ error: 'Invalid Date' })
    }
    const available = await AvailableService.run({
      date,
      coach_id: req.params.coach_id
    })
    return res.json(available)
  }
}

export default new AvailableController()