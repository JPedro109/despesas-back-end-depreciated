import { setup } from "../setup";
import { Rules as CreateUser } from "../../../core/useCases/User/CreateUser/Rules";
import { InvalidParamError } from "../../../utils/error";
import { userRepository } from "../../../data/repositories/UserRepository";

describe("Integration Test - Create User", () => {

	setup();

	test("Should not create the user, because the email already was registered", async () => {
		const createUserRules = new CreateUser(userRepository);
        
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
		const createUserRules = new CreateUser(userRepository);
		
		const user = {
			email: "email@test.com",
			password: "Password1234",
			passwordConfirm: "Password1234",
		};
		const response = await createUserRules.execute(user);
		expect(response).toBe(user.email);
	});
});