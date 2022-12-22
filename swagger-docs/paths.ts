import { errorSchema, responseSchema } from "./schemas";

export const paths = {

	"/user/create": {
		post: {
			tags: [ "Usuário" ],
			summary: "Faz a criação de um usuário",
			parameters: [
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							email: {
								type: "string"
							},
		
							password: {
								type: "string"
							},
		
							passwordConfirm: {
								type: "string"
							}
						}
					}
				},
			],
			responses: {
				
				201: {
					description: "Sucesso na criação",
					schema: responseSchema
				},
	
				400: {
					description: "Erro do usuário",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/verify-email": {
		post: {
			tags: [ "Usuário" ],
			summary: "Faz a confirmação de que e-mail do usuário existe",
			parameters: [  
				{
					in: "query",
					name: "email",
					required: true
				},

				{
					in: "query",
					name: "token",
					required: true
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na confirmação do e-mail",
					schema: responseSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/user/login": {
		post: {
			tags: [ "Usuário" ],
			summary: "Faz o login do usuário",
			parameters: [  
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							email: {
								type: "string"
							},
							
							password: {
								type: "string"
							},	
						}
					}
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na autentificação do usuário",
					schema: responseSchema
				},
	
				400: {
					description: "Erro do usuário",
					schema: errorSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/refresh-token": {
		post: {
			tags: [ "Usuário" ],
			summary: "Faz o retorno de um access token",
			parameters: [  
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							refreshToken: {
								type: "string"
							}
						}
					}
				},
			],
			responses: {
				
				200: {
					description: "Sucesso no retorno",
					schema: responseSchema
				},
	
				401: {
					description: "Erro de Autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/user/password/send-token-password-recover": {
		post: {
			tags: [ "Usuário" ],
			summary: "Faz o envio do link de recuperação de senha do usuário",
			parameters: [  
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							email: {
								type: "string"
							}
						}
					}
				},
			],
			responses: {
				
				200: {
					description: "Sucesso no envio do link",
					schema: responseSchema
				},
	
				400: {
					description: "Erro do usuário",
					schema: errorSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/user/password/password-recover": {
		patch: {
			tags: [ "Usuário" ],
			summary: "Faz a recuperação da senha do usuário",
			parameters: [  
				{
					in: "query",
					name: "email",
					required: true,
				},

				{
					in: "query",
					name: "token",
					required: true,
				},
	
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							password: {
								type: "string"
							},
							
							passwordConfirm: {
								type: "string"
							},
						}
					},
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na recuperação da senha",
					schema: responseSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/user/email/send-token-update-email": {
		post: {
			tags: [ "Usuário" ],
			summary: "Faz o envio do link de confirmação de atualização de email",
			parameters: [
				{
					in: "header",
					name: "Authorization",
					required: true,
					description: "Token de Autentificação",
					example: "Bearer token"
				},
				
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							email: {
								type: "string"
							}
						}
					}
				},
			],
			responses: {
				
				200: {
					description: "Sucesso no envio do link",
					schema: responseSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/update-email": {
		patch: {
			tags: [ "Usuário" ],
			summary: "Faz a confirmação a atualização do e-mail",
			parameters: [
				{
					in: "header",
					name: "Authorization",
					required: true,
					description: "Token de Autentificação",
					example: "Bearer token"
				},
				
				{
					in: "query",
					name: "email",
					required: true,
				},

				{
					in: "query",
					name: "token",
					required: true,
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na atualização do e-mail",
					schema: responseSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/user/password/update": {
		patch: {
			tags: [ "Usuário" ],
			summary: "Faz a atualização da senha do usuário",
			parameters: [
				{
					in: "header",
					name: "Authorization",
					required: true,
					description: "Token de Autentificação",
					example: "Bearer token"
				},
				
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							passwordCurrent: {
								type: "string"
							},
							
							password: {
								type: "string"
							},
		
							passwordConfirm: {
								type: "string"
							},
						}
					},
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na atualização da senha do usuário",
					schema: responseSchema
				},
	
				400: {
					description: "Erro ocasiona pelo usuário",
					schema: errorSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/user/delete": {
		delete: {
			tags: [ "Usuário" ],
			summary: "Faz a exclusão do usuário",
			parameters: [
				{
					in: "header",
					name: "Authorization",
					required: true,
					description: "Token de Autentificação",
					example: "Bearer token"
				},
				
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							password: {
								type: "string"
							},
		
							passwordConfirm: {
								type: "string"
							},
						}
					},
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na exclusão do usuário",
					schema: responseSchema
				},
	
				400: {
					description: "Erro do usuário",
					schema: errorSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/expenses": {
		post: {
			tags: [ "Despesa" ],
			summary: "Faz a criação de uma despesa",
			parameters: [
				{
					in: "header",
					name: "Authorization",
					required: true,
					description: "Token de Autentificação",
					example: "Bearer token"
				},
				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							expenseName: {
								type: "string"
							},
		
							dueDate: {
								type: "date",
								example: "2023-05-17"
							},

							price: {
								type: "number"
							}
						}
					},
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na criação da despesa",
					schema: responseSchema
				},
	
				400: {
					description: "Erro do usuário",
					schema: errorSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		},

		get: {
			tags: [ "Despesa" ],
			summary: "Faz o retorno das despesas",
			parameters: [
				{
					in: "header",
					name: "Authorization",
					required: true,
					description: "Token de Autentificação",
					example: "Bearer token"
				},
			],
			responses: {
				
				200: {
					description: "Sucesso no retorno das despesas",
					schema: {
						type: "array",
						items: {
							type: "object",
							properties: {
								id: {
									type: "string"
								},
								expenseName: {
									type: "string"
								},
								dueDate: {
									type: "datetime",
									example: "2019-05-17"
								},
								price: {
									type: "number"
								}
							}
						}
					}
				},
	
				400: {
					description: "Erro do usuário",
					schema: errorSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		}
	},

	"/expenses/update/{id}": {
		put: {
			tags: [ "Despesa" ],
			summary: "Faz a atualização de uma despesa",
			parameters: [
				{
					in: "header",
					name: "Authorization",
					required: true,
					description: "Token de Autentificação",
					example: "Bearer token"
				},

				{
					in: "path",
					name: "id",
					required: true
				},

				{
					in: "body",
					name: "body",
					required: true,
					schema: {
						type: "object",
						properties: {
							expenseName: {
								type: "string"
							},
		
							dueDate: {
								type: "string"
							},

							price: {
								type: "number"
							}
						}
					},
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na atualização da despesa",
					schema: responseSchema
				},
	
				400: {
					description: "Erro do usuário",
					schema: errorSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		},
	},

	"/expenses/delete/{id}": {
		delete: {
			tags: [ "Despesa" ],
			summary: "Faz a exclusão de uma despesa",
			parameters: [
				{
					in: "header",
					name: "Authorization",
					required: true,
					description: "Token de Autentificação",
					example: "Bearer token"
				},

				{
					in: "path",
					name: "id",
					required: true
				},
			],
			responses: {
				
				200: {
					description: "Sucesso na exclusão da despesa",
					schema: responseSchema
				},
	
				400: {
					description: "Erro do usuário",
					schema: errorSchema
				},
	
				401: {
					description: "Erro de autorização",
					schema: errorSchema
				},
	
				500: {
					description: "Erro no servidor",
					schema: errorSchema
				}
			}
		},
	},
};