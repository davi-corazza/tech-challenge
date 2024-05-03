-- Table 'cliente'
CREATE TABLE IF NOT EXISTS clientes (
	idcliente INT NOT NULL,
	cpf VARCHAR(45) NOT NULL,
	nome VARCHAR(45) NOT NULL,
	telefone VARCHAR(45),
	email VARCHAR(45),
	PRIMARY KEY (idcliente),
	UNIQUE (cpf)
	);

-- Table `pagamento`
CREATE TABLE IF NOT EXISTS pagamento (
	idpagamento INT NOT NULL,
	formaDePagamento VARCHAR(45) NOT NULL,
	PRIMARY KEY (idpagamento)
	);

-- Table `pedido`
CREATE TABLE IF NOT EXISTS pedido (
	idpedido INT NOT NULL,
	fk_idcliente INT NOT NULL,
	status INT,
	fk_idpagamento INT NOT NULL,
	valorDoPedido VARCHAR(45),
	statusPagamento VARCHAR(45),
	dataPagamento TIMESTAMP,
	PRIMARY KEY (idpedido),
	FOREIGN KEY (fk_idcliente) REFERENCES clientes (idcliente),
	FOREIGN KEY (fk_idpagamento) REFERENCES pagamento (idpagamento)
	);

-- Table `categoria`
CREATE TABLE IF NOT EXISTS categoria (
	idCategoria INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	PRIMARY KEY (idCategoria)
	);

-- Table `produto`
CREATE TABLE IF NOT EXISTS produto (
	idproduto INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	fk_idCategoria INT NOT NULL,
	valor_minimo VARCHAR(45),
	PRIMARY KEY (idproduto),
	FOREIGN KEY (fk_idCategoria) REFERENCES categoria (idCategoria)
	);

-- Table `combo`
CREATE TABLE IF NOT EXISTS combo (
	idcombo INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	desconto FLOAT,
	PRIMARY KEY (idcombo)
	);

-- Table `combo_produto`
CREATE TABLE IF NOT EXISTS combo_produto (
	fk_idcombo INT NOT NULL,
	fk_idproduto INT NOT NULL,
	FOREIGN KEY (fk_idcombo) REFERENCES combo (idcombo),
	FOREIGN KEY (fk_idproduto) REFERENCES produto (idproduto)
	);

-- Table `pedido_produto`
CREATE TABLE IF NOT EXISTS pedido_produto (
	fk_idpedido INT NOT NULL,
	fk_idproduto INT NOT NULL,
	observacao TEXT,
	FOREIGN KEY (fk_idpedido) REFERENCES pedido (idpedido),
	FOREIGN KEY (fk_idproduto) REFERENCES produto (idproduto)
	);

-- Table `ingredientes`
CREATE TABLE IF NOT EXISTS ingredientes (
	idItens INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	preco DECIMAL(18,2) NOT NULL,
	descricao TEXT,
	PRIMARY KEY (idItens)
	);

-- Table `produto_ingredientes`
CREATE TABLE IF NOT EXISTS produto_ingredientes (
	fk_iditens INT NOT NULL,
	fk_idproduto INT NOT NULL,
	FOREIGN KEY (fk_iditens) REFERENCES ingredientes (idItens),
	FOREIGN KEY (fk_idproduto) REFERENCES produto (idproduto)
	);

-- Table `funcionarios`
CREATE TABLE IF NOT EXISTS funcionarios (
	idfuncionarios INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	cpf VARCHAR(45) NOT NULL,
	username VARCHAR(45),
	password VARCHAR(45),
	PRIMARY KEY (idfuncionarios)
	);

-- Table `campanhas`
CREATE TABLE IF NOT EXISTS campanhas (
	idCampanha VARCHAR(45) NOT NULL,
	fk_idfuncionarios INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	dataFimCampanha TIMESTAMP,
	regraCampanha INT,
	desconto DECIMAL(18,2),
	PRIMARY KEY (idCampanha),
	FOREIGN KEY (fk_idfuncionarios) REFERENCES funcionarios (idfuncionarios)
	);

-- Table `campanha_clientes`
CREATE TABLE IF NOT EXISTS campanha_clientes (
	campanhas_idCampanha VARCHAR(45) NOT NULL,
	cadastros_idcliente INT NOT NULL,
	FOREIGN KEY (campanhas_idCampanha) REFERENCES campanhas (idCampanha),
	FOREIGN KEY (cadastros_idcliente) REFERENCES clientes (idcliente)
	);


-- Index para a coluna 'cpf' na tabela 'clientes'
CREATE INDEX idx_cpf ON clientes (cpf);

-- Index para a coluna 'fk_idcliente' na tabela 'pedido'
CREATE INDEX idx_fk_idcliente ON pedido (fk_idcliente);

-- Index para a coluna 'fk_idpagamento' na tabela 'pedido'
CREATE INDEX idx_fk_idpagamento ON pedido (fk_idpagamento);

-- Index para a coluna 'fk_idCategoria' na tabela 'produto'
CREATE INDEX idx_fk_idCategoria ON produto (fk_idCategoria);

-- Index para a coluna 'nome' na tabela 'produto', útil para buscas por nome
CREATE INDEX idx_nome_produto ON produto (nome);

-- Index para a coluna 'nome' na tabela 'categoria', se busca por nome for comum
CREATE INDEX idx_nome_categoria ON categoria (nome);

-- Index para a coluna 'dataPagamento' na tabela 'pedido', útil para queries que filtram por data
CREATE INDEX idx_dataPagamento ON pedido (dataPagamento);

-- Index composto para 'fk_idcombo' e 'fk_idproduto' em 'combo_produto', útil para joins ou buscas específicas de combinações
CREATE INDEX idx_fk_idcombo_fk_idproduto ON combo_produto (fk_idcombo, fk_idproduto);

-- Index para 'campanhas_idCampanha' na tabela 'campanha_clientes'
CREATE INDEX idx_campanhas_idCampanha ON campanha_clientes (campanhas_idCampanha);

-- Index para 'cadastros_idcliente' na tabela 'campanha_clientes'
CREATE INDEX idx_cadastros_idcliente ON campanha_clientes (cadastros_idcliente);
