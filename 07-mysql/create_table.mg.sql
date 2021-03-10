START TRANSACTION;

USE joshuaschoep_test_db;

DROP TABLE IF EXISTS People;

CREATE TABLE People (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(32),
    last_name VARCHAR(64),
    occupation VARCHAR(64),
    age INT,
    PRIMARY KEY (id)
);

SHOW COLUMNS FROM People;

INSERT INTO People (first_name, last_name, occupation, age) VALUES
    ('Fred', 'Wolfe', 'Plumber', 19),
    ('Janet', 'Dougherty', 'Engineer', 45),
    ('Englewood', 'Jackson', 'Musician', 205),
    ('Igor', '', 'redacted', 45)
;

SELECT first_name, last_name, occupation, age FROM People;

DROP TABLE IF EXISTS Pets;

CREATE TABLE Pets (
    id INT NOT NULL AUTO_INCREMENT,
    owner_id INT NOT NULL,
    name VARCHAR(32),
    animal VARCHAR(64),
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES People(id)
);

SHOW COLUMNS FROM Pets;

INSERT INTO Pets (owner_id, name, animal) VALUES
    (1, "Fido", "Dog"),
    (3, "Alfred", "Alligator"),
    (2, "Jimmy", "Turtle"),
    (2, "Jimothy", "Turtle"),
    (3, "Potter", "Cat"),
    (4, "Dog", "Dog")
;

SELECT owner.first_name, owner.last_name, pets.name, pets.animal 
    FROM People AS owner, Pets AS pets
    WHERE pets.owner_id = owner.id
;

COMMIT;