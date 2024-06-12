--
-- PostgreSQL database dump
--HOW TO COPY
    --pg_dump name-of-db > name-of-db.sql

--HOW TO RECREATE FROM  A COPY
    --createdb name-of-db
    --psql -d name-of-db -f source-file.sql

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

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
-- Name: projects; Type: TABLE; Schema: public; Owner: sonoj
--

CREATE TABLE public.projects (
    title character varying(30) NOT NULL,
    description text,
    max_grade double precision
);


ALTER TABLE public.projects OWNER TO sonoj;

--
-- Name: students; Type: TABLE; Schema: public; Owner: sonoj
--

CREATE TABLE public.students (
    id integer NOT NULL,
    github character varying(20),
    first_name character varying(20),
    last_name character varying(20)
);


ALTER TABLE public.students OWNER TO sonoj;

--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: sonoj
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.students_id_seq OWNER TO sonoj;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sonoj
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: sonoj
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: sonoj
--

COPY public.projects (title, description, max_grade) FROM stdin;
Markov	Tweets generated from Markov chains	50
Blockly	Programmatic Logic Puzzle Game	100
Monecrooft	Block Building Game	5000
The Moon	Literally make the moon from majoras mask	64
The Force	Learn to wield the Force	160
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: sonoj
--

COPY public.students (id, github, first_name, last_name) FROM stdin;
1	jhacks	Jane	Hacker
2	sdevelops	Sarah	Developer
\.


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sonoj
--

SELECT pg_catalog.setval('public.students_id_seq', 2, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: sonoj
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (title);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: sonoj
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

