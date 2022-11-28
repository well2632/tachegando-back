const db = require("../config/db");

module.exports = {
  async getAll(request, response, next) {
    const data = await db.order.findMany({
      where: {
        establishment_id: request.query.establishment_id,
      },
      select: {
        id: true,
        contact_name: true,
        contact_phone: true,
        description: true,
        establishment_id: true,
        estimated_time: true,
        status: true,
        created_at: true,
      },
    });

    response.status(200).send(data);
  },

  async getById(request, response, next) {
    const { id } = request.params;

    const data = await db.order.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        contact_name: true,
        contact_phone: true,
        description: true,
        establishment_id: true,
        estimated_time: true,
        status: true,
        created_at: true,
      },
    });

    data ? response.status(200).send(data) : response.status(200).send([]);
  },

  async create(request, response, next) {
    const data = await db.order.create({
      data: {
        contact_name: request.body.contact_name,
        contact_phone: request.body.contact_phone,
        description: request.body.description,
        establishment_id: request.body.establishment_id,
        estimated_time: request.body.estimated_time,
        status: request.body.status,
        created_at: request.body.created_at,
      },
    });

    response.status(201).send(data);
  },

  async update(request, response, next) {
    const data = await db.order.update({
      where: {
        id: request.params.id,
      },
      data: {
        contact_name: request.body.contact_name,
        contact_phone: request.body.contact_phone,
        description: request.body.description,
        establishment_id: request.body.establishment_id,
        estimated_time: request.body.estimated_time,
        status: request.body.status,
        created_at: request.body.created_at,
      },
    });

    response.status(200).send(data);
  },

  async delete(request, response, next) {
    const data = await db.order.delete({
      where: {
        id: request.params.id,
      },
    });

    response.status(200).send();
  },
};
