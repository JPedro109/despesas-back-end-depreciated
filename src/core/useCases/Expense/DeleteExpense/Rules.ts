import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ id }: DTO) {

		await this.repository.delete(id);

		return "Despesa deletada com sucesso";
	}
}