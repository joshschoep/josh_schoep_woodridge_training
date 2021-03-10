START TRANSACTION;

USE joshuaschoep_test_db;

SELECT
    Pets.id AS 'Id',
    Pets.name AS 'Name',
    CONCAT(Owners.first_name, ' ', Owners.last_name) AS 'Owner Full Name',
    Owners.occupation AS 'Owner Occupation',
    Owners.age AS 'Owner Age'
    FROM People AS Owners, Pets
    WHERE Pets.owner_id = Owners.id
;

COMMIT;