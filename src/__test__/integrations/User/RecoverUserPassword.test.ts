import { setup } from "../setup";
import { Rules as RecoverUserPassword } from "../../../core/useCases/User/RecoverUserPassword/Rules";
import { InvalidParamError } from "../../../utils/error";
import { userRepository } from "../../../data/repositories/UserRepository";

describe("Integration Test - Recover User Password", () => {
	
	setup();

	test("Should not recovery password, because the verification token is incorrect", async () => {
		const recoverUserPassword = new RecoverUserPassword(userRepository);

		const user = {
			email: "emailVERIFIED@test.com",
			token: "token-incorrect",
			password: "Password12345",
			passwordConfirm: "Password12345",
		};
		await recoverUserPassword.execute(user).catch(e => {
			expect(e).toBeInstanceOf(InvalidParamError);
		});
	});

	test("Should not recovery password, because the link was expired", async () => {
		const recoverUserPassword = new RecoverUserPassword(userRepository);

		const user = {
			email: "emailWITHTOKENEXPIRED@test.com",
			token: "token",
			password: "Password12345",
			passwordConfirm: "Password12345",
		};
		await recoverUserPassword.execute(user).catch(e => {
			expect(e).toBeInstanceOf(InvalidParamError);
		});
	});

	test("Should not recovery password, because the password is equal as previous", async () => {
		const recoverUserPassword = new RecoverUserPassword(userRepository);

		const user = {
			email: "emailVERIFIED@test.com",
			token: "token",
			password: "Password1234",
			passwordConfirm: "Password1234",
		};
		await recoverUserPassword.execute(user).catch(e => {
			expect(e).toBeInstanceOf(InvalidParamError);
		});
	});

	test("Should recovery password", async () => {
		const recoverUserPassword = new RecoverUserPassword(userRepository);

		const user = {
			email: "emailVERIFIED@test.com",
			token: "token",
			password: "Password12345",
			passwordConfirm: "Password12345",
		};
		const response = await recoverUserPassword.execute(user);
		expect(response).toBe(user.email);
	});
});