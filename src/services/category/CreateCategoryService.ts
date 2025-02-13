import prismaClient from "../../prisma";

// select: o que eu quero devolver para o front ao criar algo no banco de dados

interface CategoryRequest{
name: string
}

class CreateCategoryService{
 async execute({name}:CategoryRequest ){   

    if (name === ''){
        throw new Error('Nome invalido')
    }

    const category = await prismaClient.category.create({
       data:{
        name:name
       },
       select:{
        id:true,
        name: true
       }
    })
 return category
 }
}

export {CreateCategoryService}