import Client from '../models/Client';

class ClientController {

  async store(req, res) {
    const clientExist = await Client.findOne({ where: { email: req.body.email } })
    if (clientExist) {
      return res.status(400).json({ error: 'Client already exist' })
    }
    const client = await Client.create(req.body)
    return res.status(201).json(client)
  }
}

export default new ClientController()