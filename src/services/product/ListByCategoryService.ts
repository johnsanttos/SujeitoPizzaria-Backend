import prismaClient from "../../prisma";

interface productRequest {
    category_id: string;
}

class ListByCategoryService {
  async execute({ category_id }: productRequest) {
    const findByCategory  = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return findByCategory;
  }
}

export { ListByCategoryService };