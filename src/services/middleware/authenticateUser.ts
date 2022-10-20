import { IRequestMiddleware } from "../../core/adapter/interfaces/IRequestMiddleware";
import { UnauthorizedError } from "../../utils/error";
import { JsonWebTokenModel } from "../../utils/models";
import { toolkit } from "../../utils/toolkit";

export const authenticateUser = async (request: IRequestMiddleware) => {

	const { authorization } = request.headers;

	if (!authorization) throw new UnauthorizedError("Você não está logado");

	const [, token] = authorization.split(" ");

	const decode: JsonWebTokenModel = toolkit.jsonWebToken.tokenVerification(token);

	return decode.id as string;
};