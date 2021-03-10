START TRANSACTION;

CREATE DATABASE IF NOT EXISTS joshuaschoep_test_db;

SHOW DATABASES LIKE 'joshuaschoep_test_db';

CREATE USER IF NOT EXISTS 'joshuaschoep'@'localhost' IDENTIFIED BY 'woodridge_rules!';

GRANT SELECT,CREATE,INSERT ON joshuaschoep_test_db.* TO 'joshuaschoep'@'localhost';

SHOW GRANTS FOR 'joshuaschoep'@'localhost';

COMMIT;