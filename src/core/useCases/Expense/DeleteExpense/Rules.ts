import { NotFoundError } from "../../../../utils/error";
import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ id }: DTO) {

		const expense = await this.repository.getOne(id);

		if(!expense) throw new NotFoundError("Essa despesa que você quer apagar não existe");

		await this.repository.delete(id);

		return id;
	}
}