import prismaClient from "../../prisma";

interface itemRequest {
    item_id: string;
}


class RemoveItemService {  
    async execute({item_id}: itemRequest) {

        const  order = await prismaClient.item.delete({
            where:{
                id:item_id
            }
        })
        return order
    }
}

export { RemoveItemService };