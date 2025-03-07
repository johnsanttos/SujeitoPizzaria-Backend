import prismaClient from "../../prisma";

class ListOrderService {
  async execute() {
    //findMany() metodo para trazer todos do database.
    const orders = await prismaClient.order.findMany({
        where:{
            draft: false,
            status: false,
        },
        //orderBy: {created_at: 'desc'} para ordenar por data de criação
        orderBy:{
            created_at: 'desc'}
    });

    return orders;
  }
}

export { ListOrderService };