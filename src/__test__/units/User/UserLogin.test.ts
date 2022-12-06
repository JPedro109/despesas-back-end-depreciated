import { setup } from "../setup";
import { Rules as UserLogin  } from "../../../core/useCases/User/UserLogin/Rules";
import { UnauthorizedError } from "../../../utils/error";
import { userRepositoryInMemory } from "../Mock";

describe("Unit Test - User Login", () => {

	setup();

	test("Should not return the token, because the email is incorrect", async () => {

		const userLoginEmailRules = new UserLogin(userRepositoryInMemory);

		const user = {
			email: "emailISNOTEXISTS@test.com",
			password: "Password1234"
		};
		await userLoginEmailRules.execute(user).catch(e => {
			expect(e).toBeInstanceOf(UnauthorizedError);
		});

	});

	test("Should not return the token, because the password is incorrect", async () => {

		const userLoginEmailRules = new UserLogin(userRepositoryInMemory);

		const user = {
			email: "emailVERIFIED@test.com",
			password: "Password12345"
		};
		await userLoginEmailRules.execute(user).catch(e => {
			expect(e).toBeInstanceOf(UnauthorizedError);
		});

	});

	test("Should not return the token, because the email was not verified", async () => {

		const userLoginEmailRules = new UserLogin(userRepositoryInMemory);

		const user = {
			email: "emailISNOTVERIFIED@test.com",
			password: "Password1234"
		};
		await userLoginEmailRules.execute(user).catch(e => {
			expect(e).toBeInstanceOf(UnauthorizedError);
		});

	});

	test("Should return the token", async () => {

		const userLoginEmailRules = new UserLogin(userRepositoryInMemory);

		const user = {
			email: "emailVERIFIED@test.com",
			password: "Password1234"
		};
		const response = await userLoginEmailRules.execute(user);
		expect(response.accessToken).not.toBeUndefined();
		expect(response.refreshToken).not.toBeUndefined();
	});
});