--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: campaign; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.campaign (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "endDate" date,
    "campaignRule" character varying(150),
    discount numeric(18,2),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "fk_idCampaign" integer
);


ALTER TABLE public.campaign OWNER TO myuser;

--
-- Name: campaign_customer; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.campaign_customer (
    id integer NOT NULL,
    "fk_idCampaign" integer,
    "fk_idCustomer" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.campaign_customer OWNER TO myuser;

--
-- Name: campaign_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.campaign_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.campaign_customer_id_seq OWNER TO myuser;

--
-- Name: campaign_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.campaign_customer_id_seq OWNED BY public.campaign_customer.id;


--
-- Name: campaign_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.campaign_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.campaign_id_seq OWNER TO myuser;

--
-- Name: campaign_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.campaign_id_seq OWNED BY public.campaign.id;


--
-- Name: category; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.category OWNER TO myuser;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_id_seq OWNER TO myuser;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: combo; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.combo (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    discount double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "fk_idCombo" integer
);


ALTER TABLE public.combo OWNER TO myuser;

--
-- Name: combo_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.combo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.combo_id_seq OWNER TO myuser;

--
-- Name: combo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.combo_id_seq OWNED BY public.combo.id;


--
-- Name: combo_product; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.combo_product (
    id integer NOT NULL,
    "fk_idCombo" integer,
    "fk_idProduct" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.combo_product OWNER TO myuser;

--
-- Name: combo_product_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.combo_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.combo_product_id_seq OWNER TO myuser;

--
-- Name: combo_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.combo_product_id_seq OWNED BY public.combo_product.id;


--
-- Name: customer; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    cpf character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    "phoneNumer" character varying(255),
    email character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "fk_idCustomer" integer
);


ALTER TABLE public.customer OWNER TO myuser;

--
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customer_id_seq OWNER TO myuser;

--
-- Name: customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.customer_id_seq OWNED BY public.customer.id;


--
-- Name: employee; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.employee (
    id integer NOT NULL,
    cpf character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.employee OWNER TO myuser;

--
-- Name: employee_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.employee_id_seq OWNER TO myuser;

--
-- Name: employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;


--
-- Name: order; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."order" (
    id integer NOT NULL,
    "fk_idCustomer" integer,
    "fk_idCampaign" integer,
    status character varying(255) NOT NULL,
    price double precision NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "fk_idOrder" integer
);


ALTER TABLE public."order" OWNER TO myuser;

--
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.order_id_seq OWNER TO myuser;

--
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;


--
-- Name: order_product; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.order_product (
    id integer NOT NULL,
    observation character varying(255) NOT NULL,
    "fk_idOrder" integer,
    "fk_idCombo" integer,
    "fk_idProduct" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.order_product OWNER TO myuser;

--
-- Name: order_product_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.order_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.order_product_id_seq OWNER TO myuser;

--
-- Name: order_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.order_product_id_seq OWNED BY public.order_product.id;


--
-- Name: payment; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.payment (
    id integer NOT NULL,
    "paymentMethod" character varying(255) NOT NULL,
    "paymentCode" character varying(255) NOT NULL,
    status character varying(255) NOT NULL,
    "fk_idOrder" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.payment OWNER TO myuser;

--
-- Name: payment_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.payment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payment_id_seq OWNER TO myuser;

--
-- Name: payment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.payment_id_seq OWNED BY public.payment.id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.product (
    id integer NOT NULL,
    "fk_idCategory" integer,
    name character varying(255) NOT NULL,
    description character varying(900) NOT NULL,
    price double precision NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "fk_idProduct" integer
);


ALTER TABLE public.product OWNER TO myuser;

--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_id_seq OWNER TO myuser;

--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: campaign id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.campaign ALTER COLUMN id SET DEFAULT nextval('public.campaign_id_seq'::regclass);


--
-- Name: campaign_customer id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.campaign_customer ALTER COLUMN id SET DEFAULT nextval('public.campaign_customer_id_seq'::regclass);


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: combo id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.combo ALTER COLUMN id SET DEFAULT nextval('public.combo_id_seq'::regclass);


--
-- Name: combo_product id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.combo_product ALTER COLUMN id SET DEFAULT nextval('public.combo_product_id_seq'::regclass);


--
-- Name: customer id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);


--
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);


--
-- Name: order id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- Name: order_product id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.order_product ALTER COLUMN id SET DEFAULT nextval('public.order_product_id_seq'::regclass);


--
-- Name: payment id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.payment ALTER COLUMN id SET DEFAULT nextval('public.payment_id_seq'::regclass);


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Data for Name: campaign; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.campaign (id, name, "endDate", "campaignRule", discount, "createdAt", "updatedAt", "fk_idCampaign") FROM stdin;
1	Primeiro pedido	\N	Clientes cadastrados que não possuam nenhum cliente	0.10	2024-05-28 00:36:55.343624+00	2024-05-28 00:36:55.343624+00	\N
\.


--
-- Data for Name: campaign_customer; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.campaign_customer (id, "fk_idCampaign", "fk_idCustomer", "createdAt", "updatedAt") FROM stdin;
1	1	1	2024-05-28 00:44:09.111405+00	2024-05-28 00:44:09.111405+00
2	1	2	2024-05-28 00:44:09.111405+00	2024-05-28 00:44:09.111405+00
\.


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.category (id, name, "createdAt", "updatedAt") FROM stdin;
1	Lanche	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00
2	Bebida	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00
3	Acompanhamento	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00
4	Sobremesa	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00
\.


--
-- Data for Name: combo; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.combo (id, name, discount, "createdAt", "updatedAt", "fk_idCombo") FROM stdin;
1	Combo Bovino	0.1	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
2	Combo Frango do chef	0.15	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
3	Combo Sobremesa	0.2	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
4	Combo Vegetariano	0.15	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
\.


--
-- Data for Name: combo_product; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.combo_product (id, "fk_idCombo", "fk_idProduct", "createdAt", "updatedAt") FROM stdin;
1	1	1	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
2	1	5	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
3	1	12	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
4	2	3	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
5	2	8	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
6	2	13	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
7	3	15	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
8	3	17	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
9	4	11	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
10	4	6	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
11	4	15	2024-05-28 00:39:46.442967+00	2024-05-28 00:39:46.442967+00
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.customer (id, cpf, name, "phoneNumer", email, "createdAt", "updatedAt", "fk_idCustomer") FROM stdin;
1	10397737025	Cláudia Melissa Raimunda	31999999999	claudia-cliente1@gmail.com	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
2	51910940003	Pedro Henrique Anderson Marcos Vinicius Nascimento	11999999999	pedro-cliente2@gmail.com	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
3	24442757054	Manuel Gael Cavalcanti	19999999999	manuel-cliente3@gmail.com	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.employee (id, cpf, name, username, password, "createdAt", "updatedAt") FROM stdin;
1	26735163010	Nair Alana Eduarda Cavalcanti	teste	MTIzNDU=	2024-05-28 00:34:30.592322+00	2024-05-28 00:34:30.592322+00
\.


--
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."order" (id, "fk_idCustomer", "fk_idCampaign", status, price, "createdAt", "updatedAt", "fk_idOrder") FROM stdin;
1	3	1	Recebido	51.75	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
2	\N	\N	Em Preparacao	30	2024-05-22 23:43:39.328+00	2024-05-22 23:43:39.328+00	\N
\.


--
-- Data for Name: order_product; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.order_product (id, observation, "fk_idOrder", "fk_idCombo", "fk_idProduct", "createdAt", "updatedAt") FROM stdin;
3		1	1	1	2024-05-28 00:45:55.983245+00	2024-05-28 00:45:55.983245+00
4		1	1	5	2024-05-28 00:45:55.983245+00	2024-05-28 00:45:55.983245+00
5		1	1	12	2024-05-28 00:45:55.983245+00	2024-05-28 00:45:55.983245+00
6		2	\N	15	2024-05-28 00:45:55.983245+00	2024-05-28 00:45:55.983245+00
\.


--
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.payment (id, "paymentMethod", "paymentCode", status, "fk_idOrder", "createdAt", "updatedAt") FROM stdin;
1	MercadoPago	QRCODE8329742967349	Paid	1	2024-05-28 02:28:45.641084+00	2024-05-28 02:28:45.641084+00
2	MercadoPago	QRCODE8329742987345	Paid	2	2024-05-28 02:28:45.641084+00	2024-05-28 02:28:45.641084+00
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.product (id, "fk_idCategory", name, description, price, "createdAt", "updatedAt", "fk_idProduct") FROM stdin;
1	1	sanduíche com carne bovina, alface, bacon, avocado e molho picante	Saboreie a perfeição em cada mordida com nosso irresistível sanduíche gourmet. Comece com uma suculenta carne bovina grelhada, queijo suiço, combinada com a frescura crocante da alface e a intensidade defumada do bacon. Adicione uma camada cremosa e saudável de avocado para uma textura suave e um sabor indulgente. E para coroar essa experiência gastronômica, nosso exclusivo molho picante oferece um toque de calor e sabor, elevando cada elemento deste sanduíche a um novo patamar de delícia. Prepare-se para uma explosão de sabores que vai deixar você desejando mais a cada mordida!	32.5	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
2	1	sanduíche de frango com queijo suíço, rúcula, tomate e molho de maionese temperada	Delicie-se com o nosso sanduíche de frango gourmet, uma combinação perfeita de sabores frescos e deliciosos. Comece com uma suculenta e macia carne de frango grelhada, coberta com uma fatia generosa de queijo suíço derretido. Em seguida, adicione a crocância e o sabor picante da rúcula fresca, complementada pela suculência refrescante do tomate maduro. E para finalizar, o nosso molho de maionese temperada, com seus aromas e sabores cuidadosamente selecionados, acrescenta um toque de sofisticação e irresistibilidade a cada mordida. Prepare-se para uma experiência gastronômica inesquecível que vai deixar seu paladar pedindo mais!	25.5	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
3	1	Sanduíche de frango do chef	Começamos com um suculento hambúrguer de frango, grelhado até a perfeição para garantir a máxima suculência e sabor. Em seguida, adicionamos uma generosa camada de queijo cheddar derretido, cobrindo cada mordida com cremosidade irresistível. Para adicionar um toque doce e caramelizado, acrescentamos cebola caramelizada, elevando o sabor a um novo patamar. Mas não paramos por aí! Uma camada crocante de batalha palha adiciona uma textura extra e uma explosão de sabor a cada mordida. E para coroar esta obra-prima, nosso molho picante exclusivo oferece um toque de calor e sabor que vai deixar seu paladar pedindo mais. Prepare-se para uma experiência gastronômica inesquecível que vai satisfazer todos os seus desejos!	33.5	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
4	1	Sanduíche de linguiça	Este sanduíche combina o sabor rico da linguiça caseira com o robusto queijo cheddar, a doçura da cebola caramelizada e o toque picante do molho de mostarda, tudo envolto no nutritivo Pão da casa. Uma combinação de sabores e texturas que vai deixar seu paladar emocionado!	26.5	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
5	2	Coca-cola	Refrigerante de cola	10	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
6	2	Suco de laranja	Suco 100% natural	10	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
7	2	Coca-cola zero açucar	Refrigerante de cola sem açúcar	10	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
8	2	Guarana	Refrigerante de guaraná	10	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
9	2	Soda	Refrigerante de limão	10	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
10	2	Suco de uva	Suco 100% integral	10	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
11	1	Sanduíche vegetariano	Este sanduíche vegetariano oferece uma combinação deliciosa de sabores e texturas, com a carne de soja marinada como destaque principal, tudo envolto no saboroso Pão de Centeio. Uma opção saudável e satisfatória para qualquer refeição	30.5	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
12	3	Batatas Fritas Caseiras	Batatas cortadas em palitos e fritas até ficarem douradas e crocantes, temperadas com sal e ervas para um toque extra de sabor.	15	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
13	3	Aneis de cebola	Fatias generosas de cebola são mergulhadas em uma massa leve e crocante, antes de serem fritas até a perfeição	15	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
14	4	Cheesecake de Frutas Vermelhas	Uma base de biscoito amanteigado coberta com um recheio cremoso de queijo, decorado com uma variedade de frutas vermelhas frescas como morangos, framboesas e amoras. Uma sobremesa elegante e refrescante para qualquer ocasião.	30	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
15	4	Torta de Maçã com Sorvete de Baunilha	Uma torta de maçã caseira, recheada com maçãs fatiadas, canela e açúcar mascavo, servida quente com uma generosa bola de sorvete de baunilha. A combinação de sabores e texturas é irresistível.	30	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
16	4	Creme Brûlée	Uma sobremesa clássica de restaurante que você pode fazer em casa. Um creme de gemas de ovo, baunilha e açúcar é assado até ficar firme e depois caramelizado na hora de servir, criando uma casca crocante e um interior cremoso.	30	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
17	4	Tiramisu	Camadas de biscoitos de champanhe embebidos em café, intercaladas com um creme de queijo mascarpone, tudo polvilhado com cacau em pó. Uma sobremesa italiana clássica, rica em sabor e profundidade.	30	2024-05-28 23:39:00.375427+00	2024-05-28 23:39:00.375427+00	\N
\.


--
-- Name: campaign_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.campaign_customer_id_seq', 2, true);


--
-- Name: campaign_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.campaign_id_seq', 1, false);


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- Name: combo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.combo_id_seq', 1, false);


--
-- Name: combo_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.combo_product_id_seq', 11, true);


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.customer_id_seq', 1, false);


--
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.employee_id_seq', 1, false);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.order_id_seq', 1, false);


--
-- Name: order_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.order_product_id_seq', 6, true);


--
-- Name: payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.payment_id_seq', 2, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.product_id_seq', 1, false);


--
-- Name: campaign_customer campaign_customer_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.campaign_customer
    ADD CONSTRAINT campaign_customer_pkey PRIMARY KEY (id);


--
-- Name: campaign campaign_name_key; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.campaign
    ADD CONSTRAINT campaign_name_key UNIQUE (name);


--
-- Name: campaign campaign_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.campaign
    ADD CONSTRAINT campaign_pkey PRIMARY KEY (id);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: combo combo_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.combo
    ADD CONSTRAINT combo_pkey PRIMARY KEY (id);


--
-- Name: combo_product combo_product_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.combo_product
    ADD CONSTRAINT combo_product_pkey PRIMARY KEY (id);


--
-- Name: customer customer_cpf_key; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_cpf_key UNIQUE (cpf);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- Name: employee employee_cpf_key; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_cpf_key UNIQUE (cpf);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- Name: order_product order_product_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.order_product
    ADD CONSTRAINT order_product_pkey PRIMARY KEY (id);


--
-- Name: payment payment_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: campaign campaign_fk_idCampaign_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.campaign
    ADD CONSTRAINT "campaign_fk_idCampaign_fkey" FOREIGN KEY ("fk_idCampaign") REFERENCES public.campaign_customer(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: combo combo_fk_idCombo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.combo
    ADD CONSTRAINT "combo_fk_idCombo_fkey" FOREIGN KEY ("fk_idCombo") REFERENCES public.combo_product(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: customer customer_fk_idCustomer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "customer_fk_idCustomer_fkey" FOREIGN KEY ("fk_idCustomer") REFERENCES public.campaign_customer(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: order order_fk_idOrder_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "order_fk_idOrder_fkey" FOREIGN KEY ("fk_idOrder") REFERENCES public.order_product(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: product product_fk_idProduct_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "product_fk_idProduct_fkey" FOREIGN KEY ("fk_idProduct") REFERENCES public.combo_product(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

