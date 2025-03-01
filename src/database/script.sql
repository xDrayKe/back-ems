CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prenom VARCHAR(50) NOT NULL,
    nom VARCHAR(50) NOT NULL,
    matricule INT NOT NULL UNIQUE,
    dateArriver DATE NOT NULL,
    carteIdentite VARCHAR(100) NOT NULL,
    discordID VARCHAR(100) NOT NULL
);

CREATE TABLE absences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    raison VARCHAR(255) NOT NULL,
    dateDebut DATE NOT NULL,
    dateFin DATE NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);

CREATE TABLE blames (
    id INT AUTO_INCREMENT PRIMARY KEY,
    raison VARCHAR(255) NOT NULL,
    emis_par INT NOT NULL,
    pour_qui INT NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (emis_par) REFERENCES employees(id) ON DELETE CASCADE,
    FOREIGN KEY (pour_qui) REFERENCES employees(id) ON DELETE CASCADE
);


CREATE TABLE permis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(50) NOT NULL
);

INSERT INTO permis (description) VALUES
('voiture'),
('camion'),
('moto');

CREATE TABLE employee_permis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    permis_id INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    FOREIGN KEY (permis_id) REFERENCES permis(id) ON DELETE CASCADE
);

-- Fait 

CREATE TABLE grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100) NOT NULL,
    paye INT NOT NULL
);

CREATE TABLE employee_grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    grade_id INT NOT NULL,
    date_obtention DATE NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    FOREIGN KEY (grade_id) REFERENCES grades(id) ON DELETE CASCADE
);
