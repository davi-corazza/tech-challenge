import { isValidCpf } from "@utils/valid";
export class Employee {
	private id?: number;
	private cpf: string;
	private name: string;
	private username: string;
	private password: string;

	constructor(cpf: string, name: string, username: string, password: string, id?: number) {
		this.setCpf(cpf);
		this.name = name;
		this.username = username;
		this.password = password;
		this.id = id;
	}

	public getId(): number | undefined {
		return this.id;
	}

	public setCpf(cpf: string): void {
		// Remover todos os caracteres não numéricos do CPF
		const cleanedCpf = cpf.replace(/\D/g, '');
	
		// Validar o CPF
		if (!isValidCpf(cleanedCpf)) {
		  throw new Error('Invalid CPF format');
		}
	
		this.cpf = cleanedCpf;
	}

	public getCpf(): string {
		return this.cpf;
	}
	
	public getName(): string {
		return this.name;
	}
	
	public getUsername(): string {
		return this.username;
	}
	
	public getPassword(): string {
		return this.password;
	}

}
