import { setup } from "../setup";
import { Rules as CreateUser } from "../../../core/useCases/User/CreateUser/Rules";
import { InvalidParamError } from "../../../utils/error";
import { userRepositoryInMemory } from "../Mock";
import { toolkit } from "../../../utils/toolkit";

describe("Unit Test - Create User", () => {

	setup();

	test("Should not create the user, because the email already was registered", async () => {
		const createUserRules = new CreateUser(userRepositoryInMemory);
        
		const user = {
			email: "emailVERIFIED@test.com",
			password: "Password1234",
			passwordConfirm: "Password1234",
		};
		await createUserRules.execute(user).catch(e => {
			expect(e).toBeInstanceOf(InvalidParamError);
		});
	});

	test("Should create the user", async () => {
		const createUserRules = new CreateUser(userRepositoryInMemory);
		
		const user = {
			email: "email@test.com",
			password: "Password1234",
			passwordConfirm: "Password1234",
		};

		toolkit.email.sendMail = jest.fn();

		const response = await createUserRules.execute(user);
		expect(response).toBe(user.email);
	});
});