START TRANSACTION;

USE joshuaschoep_test_db;

SELECT Pets.id, name, animal 
    FROM Pets
    WHERE owner_id IS NULL
;

COMMIT;