START TRANSACTION;

USE joshuaschoep_test_db;

SELECT first_name, last_name
    FROM People
    WHERE (SELECT COUNT(*) FROM Pets WHERE People.id = Pets.owner_id) = 0
;

COMMIT;