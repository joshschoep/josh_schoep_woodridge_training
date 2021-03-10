START TRANSACTION;

USE joshuaschoep_test_db;

SELECT Pets.id, name, animal 
    FROM Pets
    WHERE (SELECT COUNT(*) FROM People WHERE Pets.owner_id = People.id) = 0
;

COMMIT;