START TRANSACTION;

USE joshuaschoep_test_db;

DROP TABLE IF EXISTS Pets;
DROP TABLE IF EXISTS People;

CREATE TABLE People (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(32),
    last_name VARCHAR(64),
    occupation VARCHAR(64),
    age TINYINT UNSIGNED,
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

CREATE TABLE Pets (
    id INT NOT NULL AUTO_INCREMENT,
    owner_id INT,
    name VARCHAR(32),
    animal VARCHAR(64),
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES People(id)
);

SHOW COLUMNS FROM Pets;

INSERT INTO Pets (owner_id, name, animal) VALUES
    (1, "Fido", "Dog"),
    (1, "Alfred", "Alligator"),
    (2, "Jimmy", "Turtle"),
    (2, "Jimothy", "Turtle"),
    (2, "Potter", "Cat"),
    (4, "Dog", "Dog"),
    (NULL, "Stray", "Cat")
;

SELECT owner.first_name, owner.last_name, pets.name, pets.animal 
    FROM People AS owner RIGHT JOIN Pets AS pets 
    ON owner.id = pets.owner_id
;

COMMIT;