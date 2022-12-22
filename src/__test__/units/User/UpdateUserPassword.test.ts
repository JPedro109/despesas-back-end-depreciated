import { setup } from "../setup";
import { Rules as UpdateUserPassword } from "../../../core/useCases/User/UpdateUserPassword/Rules";
import { InvalidParamError } from "../../../utils/error";
import { userRepositoryInMemory } from "../Mock";

describe("Unit Test - Update User Password", () => {

	setup();

	test("Should not update password, because the current password is not correct", async () => {
		const updateUserPasswordRules = new UpdateUserPassword(userRepositoryInMemory);

		const user = {
			userId: "1",
			passwordCurrent: "Password123456",
			password: "Password12345",
			passwordConfirm: "Password12345",
		};
		await updateUserPasswordRules.execute(user).catch(e => {
			expect(e).toBeInstanceOf(InvalidParamError);
		});
	});

	test("Should update password", async () => {
		const updateUserPasswordRules = new UpdateUserPassword(userRepositoryInMemory);

		const user = {
			userId: "1",
			passwordCurrent: "Password1234",
			password: "Password12345",
			passwordConfirm: "Password12345",
		};
		const respone = await updateUserPasswordRules.execute(user);
		expect(respone).toBe("1");
	});
});