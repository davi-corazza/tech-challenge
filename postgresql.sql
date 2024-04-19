-- Criação da tabela cliente
CREATE TABLE IF NOT EXISTS cliente(
	ID SERIAL PRIMARY KEY,
	Nome_Completo VARCHAR(100) NOT NULL,
	CPF CHAR(11) UNIQUE NOT NULL,
	Telefone VARCHAR(15),
	Email VARCHAR(100) UNIQUE NOT NULL
	);

-- Criação da tabela endereço
CREATE TABLE IF NOT EXISTS endereco(
	ID SERIAL PRIMARY KEY,
	Cliente_ID INT,
	Rua VARCHAR(52),
	Numero INT,
	Bairro VARCHAR(30),
	Cidade VARCHAR(52),
	Estado VARCHAR(2),
	Complemento VARCHAR(55),
	FOREIGN KEY (Cliente_ID) REFERENCES cliente(ID)
	);

-- Criação da tabela produto
CREATE TABLE IF NOT EXISTS produto(
	ID SERIAL PRIMARY KEY,
	Nome VARCHAR(50),
	Descricao VARCHAR(50),
	Preco FLOAT(10),
	Tipo VARCHAR(50)
	);

-- Criação da tabela pedido
CREATE TABLE IF NOT EXISTS pedido(
	ID SERIAL PRIMARY KEY,
	Cliente_ID INT,
	Pedido_ID VARCHAR(50),
	Data_Hora TIMESTAMP NOT NULL DEFAULT NOW(),
	Status VARCHAR(20),
	FOREIGN KEY (Cliente_ID) REFERENCES cliente(ID)
	);

-- Criação da tabela combo
CREATE TABLE IF NOT EXISTS combo(
	Pedido_ID INT,
	Produto_ID INT,
	Quantidade INT,
	FOREIGN KEY (Pedido_ID) REFERENCES pedido(ID),
	FOREIGN KEY (Produto_ID) REFERENCES produto(ID),
	PRIMARY KEY (Pedido_ID, Produto_ID)
	);

-- Criação da tabela pagamento
CREATE TABLE IF NOT EXISTS pagamento(
	ID SERIAL PRIMARY KEY,
	Pedido_ID INT,
	Valor FLOAT(10),
	Tipo VARCHAR(20),
	Data_Hora TIMESTAMP NOT NULL DEFAULT NOW(),
	FOREIGN KEY (Pedido_ID) REFERENCES pedido(ID)
	);

-- Criação de índices (descomente conforme necessário)
CREATE INDEX idx_telefone ON cliente(Telefone);
CREATE INDEX idx_cliente_id ON endereco(Cliente_ID);
CREATE INDEX idx_tipo ON produto(Tipo);
CREATE INDEX idx_preco ON produto(Preco);
CREATE INDEX idx_status ON pedido(Status);
CREATE INDEX idx_data_hora ON pedido(Data_Hora);
CREATE INDEX idx_quantidade ON combo(Quantidade);
CREATE INDEX idx_valor ON pagamento(Valor);
CREATE INDEX idx_tipo ON pagamento(Tipo);
CREATE INDEX idx_data_hora ON pagamento(Data_Hora);
