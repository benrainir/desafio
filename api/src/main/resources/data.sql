INSERT INTO city (id, name) VALUES (1, 'Fortaleza');
INSERT INTO city (id, name) VALUES (2, 'Sao Luiz');
INSERT INTO city (id, name) VALUES (3, 'Sao Paulo');

INSERT INTO district (id, name, city_id) VALUES (1, 'Aldeota', 1);
INSERT INTO district (id, name, city_id) VALUES (2, 'Messejana', 1);
INSERT INTO district (id, name, city_id) VALUES (3, 'Centro', 1);
INSERT INTO district (id, name, city_id) VALUES (4, 'Meireles', 1);
INSERT INTO district (id, name, city_id) VALUES (5, 'Edson Queiroz', 1);
INSERT INTO district (id, name, city_id) VALUES (6, 'Papicu', 1);
INSERT INTO district (id, name, city_id) VALUES (7, 'Praia do Futuro', 1);


INSERT INTO street (id, name, district_id) VALUES (1, 'AV Abolicao', 1);
INSERT INTO street (id, name, district_id) VALUES (2, 'AV Whashington Soares', 1);
INSERT INTO street (id, name, district_id) VALUES (3, 'R Antonio Pompeu', 1);
INSERT INTO street (id, name, district_id) VALUES (4, 'R Pedro I', 1);


INSERT INTO edifice (id, name, street_id) VALUES (1, 'ED 001', 2);
INSERT INTO edifice (id, name, street_id) VALUES (2, 'ED 002', 2);
INSERT INTO edifice (id, name, street_id) VALUES (3, 'ED 003', 2);
INSERT INTO edifice (id, name, street_id) VALUES (4, 'ED 004', 2);


INSERT INTO apartment (id, name, level, visited, edifice_id) 
VALUES (1, '101', 1, false, 1);

INSERT INTO apartment (id, name, level, visited, edifice_id) 
VALUES (2, '102', 1, false, 1);

INSERT INTO apartment (id, name, level, visited, edifice_id) 
VALUES (3, '103', 1, false, 1);

INSERT INTO apartment (id, name, level, visited, edifice_id) 
VALUES (4, '104', 1, false, 1);

INSERT INTO apartment (id, name, level, visited, edifice_id) 
VALUES (5, '201', 2, false, 1);

INSERT INTO apartment (id, name, level, visited, edifice_id) 
VALUES (6, '202', 2, false, 1);

INSERT INTO apartment (id, name, level, visited, edifice_id) 
VALUES (7, '203', 2, false, 1);

INSERT INTO apartment (id, name, level, visited, edifice_id) 
VALUES (8, '204', 2, false, 1);

INSERT INTO box (id, name) VALUES (1, 'Caixa 1');
INSERT INTO box (id, name) VALUES (2, 'Caixa 2');
INSERT INTO box (id, name) VALUES (3, 'Caixa 3');
INSERT INTO box (id, name) VALUES (4, 'Caixa 4');
INSERT INTO box (id, name) VALUES (5, 'Caixa 5');
INSERT INTO box (id, name) VALUES (6, 'Caixa 6');
INSERT INTO box (id, name) VALUES (7, 'Caixa 7');
INSERT INTO box (id, name) VALUES (8, 'Caixa 8');

INSERT INTO product (id, name) VALUES (1, 'Camisa BRA 2022');
INSERT INTO product (id, name) VALUES (2, 'Mouse Red Dragon');
INSERT INTO product (id, name) VALUES (3, 'Fones JBL Preto');
INSERT INTO product (id, name) VALUES (4, 'PC Gamer Kaboom XX');
INSERT INTO product (id, name) VALUES (5, 'Teclado Logitech');
INSERT INTO product (id, name) VALUES (6, 'Notebook Samsung S99');
INSERT INTO product (id, name) VALUES (7, 'Camisa ARG 2022');
INSERT INTO product (id, name) VALUES (8, 'PC Gamer Red Dragon R1');