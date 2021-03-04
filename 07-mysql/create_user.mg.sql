START TRANSACTION;

IF(SHOW DATABASES WHERE `Database` = 'joshuaschoep_test_db')
BEGIN
    ROLLBACK;
    RETURN 1;
END

CREATE DATABASE 'joshuaschoep_test_db';

SHOW DATABASES LIKE 'joshuaschoep_test_db';

IF(SELECT User FROM mysql.user WHERE User = 'joshuaschoep')
BEGIN
    ROLLBACK;
    RETURN 2;
END

CREATE USER 'joshuaschoep'@'localhost' IDENTIFIED BY 'woodridge_rules!';

GRANT ALL PRIVILEGES ON 'joshuaschoep_test_db'.* TO 'joshuaschoep'@'localhost';

SHOW GRANTS FOR 'joshuaschoep'@'localhost';

COMMIT;