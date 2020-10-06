import Users from '../models/Users';

class UsersController {
  async index(req, res) {
    try {
      const go = await UsersController.findAll();

      return res.json({ go });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const go = await Users.findOne({ where: { uid } });

      return res.json({ go });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const go = await Users.create(req.body);

      return res.json({ go });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };

      return res.json({ response });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;

      const [updated] = await Users.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Usuário não encontrado');
      }

      return res.json({ updated });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Users.destroy({ where: { uid } });

      if (!deleted) {
        throw Error('Usuário não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new UsersController();
