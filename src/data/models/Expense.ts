class Expense {
	readonly id: string;
	expense_name: string;
	due_date: Date;
	user_id?: string;
	price: number;
	created_at?: Date;
	updated_at?: Date;
}

export { Expense };