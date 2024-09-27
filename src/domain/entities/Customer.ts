import { Campaign } from "./Campaign";
import { isValidCpf,isValidEmail } from "@utils/valid";

export class Customer {
	private id?: number;
	private cpf: string;
	private name: string;
	private phoneNumber: string;
	private email: string;

	constructor(cpf: string, name: string, phoneNumber: string, email: string,  id?: number) {
		this.setCpf(cpf);
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.id = id;
	}

	public getId(): number | undefined {
		return this.id;
	}

	public getCpf(): string {
		return this.cpf;
	}

	public setCpf(cpf: string): void {
		if (!isValidCpf(cpf)) {
			throw new Error("Invalid CPF");
		}
		this.cpf = cpf;
	}

	public getName(): string {
		return this.name;
	}

	public setName(name: string): void {
		if (!name) {
			throw new Error("Name cannot be empty");
		}
		this.name = name;
	}

	public getPhoneNumber(): string {
		return this.phoneNumber;
	}

	public setPhoneNumber(phoneNumber: string): void {
		this.phoneNumber = phoneNumber;
	}

	public getEmail(): string {
		return this.email;
	}

	public setEmail(email: string): void {
		if (!isValidEmail(email)) {
			throw new Error("Invalid email format");
		}
		this.email = email;
	}
}
