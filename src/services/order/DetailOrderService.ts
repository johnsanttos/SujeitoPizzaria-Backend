import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: OrderRequest) {
    // Busca o pedido com os itens e os produtos relacionados
    const orders = await prismaClient.order.findMany({
      where: {
        id: order_id,
      },

      // incluir na resposta os itens do pedido e os produtos relacionados
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return orders;
  }
}

export { DetailOrderService };
