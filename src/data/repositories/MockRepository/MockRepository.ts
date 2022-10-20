import { IDBAdapter } from "../../adapter/IDBAdapter";
import { User } from "../../models/User";
import { Expense } from "../../models/Expense";

export class MockRepository {

	constructor(private database: IDBAdapter) { }

	async create() {
		await this.database.insert<User>({
			id: "1",
			email: "emailVERIFIED@test.com",
			password: "$2a$10$6tMxx4/gMoOKQjDjpbzJq.i7/paapFWABI7I5cC4Fw2ILxF4WKaT2",
			verification_token: "token",
			verified_email: true,
			verification_token_expiry_time: 163339098051211
		}, "user");

		await this.database.insert<User>({
			id: "2",
			email: "emailISNOTVERIFIED@test.com",
			password: "$2a$10$6tMxx4/gMoOKQjDjpbzJq.i7/paapFWABI7I5cC4Fw2ILxF4WKaT2",
			verification_token: "token",
			verified_email: false,
			verification_token_expiry_time: 163339098051211
		}, "user");

		await this.database.insert<User>({
			id: "3",
			email: "emailWITHTOKENEXPIRED@test.com",
			password: "$2a$10$6tMxx4/gMoOKQjDjpbzJq.i7/paapFWABI7I5cC4Fw2ILxF4WKaT2",
			verification_token: "544f818f5f5cd4cde44c611683fc71",
			verified_email: true,
			verification_token_expiry_time: 0
		}, "user");

		await this.database.insert<Expense>({
			id: "1",
			user_id: "1",
			expense_name: "Conta de Luz",
			due_date: new Date("2024-01-01"),
			price: 250
		}, "expense");
	}

	async delete(){
		await this.database.deleteMany("expense");
		await this.database.deleteMany("user");
	}
}