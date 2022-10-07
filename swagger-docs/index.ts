import { paths } from "./paths";

const swaggerJSON = {
	swagger: "2.0",
	info: {
		title: "Api de administração de despesas",
		description: "Aplicação que faz a administração de despesas",
		version: "1.0",
	},
	produces: [
		"application/json"
	],
	tags: [
		{
			name: "Usuário",
			description: "Rotas relacionadas ao usuário"
		},

		{
			name: "Despesa",
			description: "Rotas relacionadas a despesa"
		},

	],
	paths 
};

export default swaggerJSON;