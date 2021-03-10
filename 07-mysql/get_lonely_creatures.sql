START TRANSACTION;

USE joshuaschoep_test_db;

SELECT id, CONCAT(first_name, ' ', last_name) AS name
    FROM People
    WHERE (SELECT COUNT(*) FROM Pets WHERE People.id = Pets.owner_id) = 0
UNION ALL
SELECT id, name 
    FROM Pets
    WHERE owner_id IS NULL
;

COMMIT;