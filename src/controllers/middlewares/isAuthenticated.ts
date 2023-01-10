import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
	sub: string
}

export function isAuthenticated (
	req: Request,
    res: Response,
	next: NextFunction
){

//Receber o token

const authToken = req.headers.authorization;
if(!authToken){
	return res.status(401).end()

}
// .split do javascript quebra a string com um separador determina em " ", neste caso virgula ignorou o  primeiro item e so pegou o segundo que é token
const[, token] = authToken.split(" ")

try{
	//Valiar esse token
	const {sub} = verify(
		token,
		process.env.JWT_SECRET
	) as Payload;

	console.log(sub)

	return next();

}catch(err){
	return res.status(401).end()
}


}