-- Database Root
CREATE DATABASE IF NOT EXISTS root;

CREATE ROLE IF NOT EXISTS root WITH LOGIN PASSWORD 'root';

-- Table 'cliente'
CREATE TABLE IF NOT EXISTS clientes (
	idCliente INT NOT NULL,
	cpf CHAR(11) NOT NULL,
	nome VARCHAR(150) NOT NULL,
	telefone CHAR(13),
	email VARCHAR(150),
	PRIMARY KEY (idCliente),
	UNIQUE (cpf)
	);

-- Table `pagamento`
CREATE TABLE IF NOT EXISTS pagamentos (
	idPagamento INT NOT NULL,
	formaDePagamento VARCHAR(45) NOT NULL,
	PRIMARY KEY (idPagamento)
	);

-- Table `pedido`
CREATE TABLE IF NOT EXISTS pedidos (
	idPedido INT NOT NULL,
	fk_idCliente INT NOT NULL,
	status INT,
	fk_idPagamento INT NOT NULL,
	valorDoPedido DECIMAL(18,2),
	statusPagamento VARCHAR(45),
	dataPagamento TIMESTAMP,
	PRIMARY KEY (idPedido),
	FOREIGN KEY (fk_idCliente) REFERENCES clientes (idCliente),
	FOREIGN KEY (fk_idPagamento) REFERENCES pagamentos (idPagamento)
	);

-- Table `categoria`
CREATE TABLE IF NOT EXISTS categorias (
	idCategoria INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	PRIMARY KEY (idCategoria)
	);

-- Table `produto`
CREATE TABLE IF NOT EXISTS produtos (
	idProduto INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	fk_idCategoria INT NOT NULL,
	valorMinimo VARCHAR(45),
	PRIMARY KEY (idproduto),
	FOREIGN KEY (fk_idCategoria) REFERENCES categorias (idCategoria)
	);

-- Table `combo`
CREATE TABLE IF NOT EXISTS combos (
	idCombo INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	desconto FLOAT,
	PRIMARY KEY (idCombo)
	);

-- Table `combo_produto`
CREATE TABLE IF NOT EXISTS combos_produtos (
	fk_idCombo INT NOT NULL,
	fk_idProduto INT NOT NULL,
	FOREIGN KEY (fk_idCombo) REFERENCES combos (idCombo),
	FOREIGN KEY (fk_idProduto) REFERENCES produtos (idProduto)
	);

-- Table `pedido_produto`
CREATE TABLE IF NOT EXISTS pedidos_produtos (
	fk_idPedido INT NOT NULL,
	fk_idProduto INT NOT NULL,
	observacao TEXT,
	FOREIGN KEY (fk_idPedido) REFERENCES pedidos (idPedido),
	FOREIGN KEY (fk_idProduto) REFERENCES produtos (idProduto)
	);

-- Table `ingredientes`
CREATE TABLE IF NOT EXISTS ingredientes (
	idItem INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	preco DECIMAL(18,2) NOT NULL,
	descricao TEXT,
	PRIMARY KEY (idItens)
	);

-- Table `produto_ingredientes`
CREATE TABLE IF NOT EXISTS produtos_ingredientes (
	fk_idItem INT NOT NULL,
	fk_idProduto INT NOT NULL,
	FOREIGN KEY (fk_idItem) REFERENCES ingredientes (idItem),
	FOREIGN KEY (fk_idProduto) REFERENCES produtos (idProduto)
	);

-- Table `funcionarios`
CREATE TABLE IF NOT EXISTS funcionarios (
	idFuncionario INT NOT NULL,
	nome VARCHAR(150) NOT NULL,
	cpf CHAR(11) NOT NULL,
	username VARCHAR(45),
	password VARCHAR(45),
	PRIMARY KEY (idFuncionario)
	);

-- Table `campanhas`
CREATE TABLE IF NOT EXISTS campanhas (
	idCampanha INT NOT NULL,
	fk_idFuncionario INT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	dataFimCampanha TIMESTAMP,
	regraCampanha VARCHAR(150),
	desconto DECIMAL(18,2),
	PRIMARY KEY (idCampanha),
	FOREIGN KEY (fk_idFuncionario) REFERENCES funcionarios (idFuncionarios)
	);

-- Table `campanha_clientes`
CREATE TABLE IF NOT EXISTS campanhas_clientes (
	fk_idCampanha INT NOT NULL,
	fk_idCliente INT NOT NULL,
	FOREIGN KEY (fk_idCampanha) REFERENCES campanhas (idCampanha),
	FOREIGN KEY (fk_idCliente) REFERENCES clientes (idCliente)
	);


-- Index para a coluna 'cpf' na tabela 'clientes'
CREATE INDEX idx_cpf ON clientes (cpf);

-- Index para a coluna 'fk_idcliente' na tabela 'pedido'
CREATE INDEX idx_fk_idcliente ON pedidos (fk_idCliente);

-- Index para a coluna 'fk_idpagamento' na tabela 'pedido'
CREATE INDEX idx_fk_idpagamento ON pedidos (fk_idPagamento);

-- Index para a coluna 'fk_idCategoria' na tabela 'produto'
CREATE INDEX idx_fk_idCategoria ON produtos (fk_idCategoria);

-- Index para a coluna 'nome' na tabela 'produto', útil para buscas por nome
CREATE INDEX idx_nome_produto ON produtos (nome);

-- Index para a coluna 'nome' na tabela 'categoria', se busca por nome for comum
CREATE INDEX idx_nome_categoria ON categorias (nome);

-- Index para a coluna 'dataPagamento' na tabela 'pedido', útil para queries que filtram por data
CREATE INDEX idx_dataPagamento ON pedidos (dataPagamento);

-- Index composto para 'fk_idcombo' e 'fk_idproduto' em 'combo_produto', útil para joins ou buscas específicas de combinações
CREATE INDEX idx_fk_idcombo_fk_idproduto ON combos_produtos (fk_idCombo, fk_idProduto);

-- Index para 'campanhas_idCampanha' na tabela 'campanha_clientes'
CREATE INDEX idx_campanhas_idCampanha ON campanhas_clientes (fk_idCampanha);

-- Index para 'cadastros_idcliente' na tabela 'campanha_clientes'
CREATE INDEX idx_cadastros_idcliente ON campanhas_clientes (fk_idCliente);
