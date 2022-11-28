const db = require("../config/db");

module.exports = {
  async getAll(request, response, next) {
    const data = await db.establishment.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    response.status(200).send(data);
  },

  async getById(request, response, next) {
    const { id } = request.params;

    const data = await db.establishment.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    data ? response.status(200).send(data) : response.status(200).send([]);
  },

  async create(request, response, next) {
    const data = await db.establishment.create({
      data: {
        email: request.body.email,
        name: request.body.name,
        password: request.body.password,
      },
    });

    response.status(201).send(data);
  },

  async update(request, response, next) {
    const data = await db.establishment.update({
      where: {
        id: request.params.id,
      },
      data: {
        email: request.body.email,
        name: request.body.name,
        password: request.body.password,
      },
    });

    response.status(200).send(data);
  },

  async delete(request, response, next) {
    const data = await db.establishment.delete({
      where: {
        id: request.params.id,
      },
    });

    response.status(200).send();
  },
};
