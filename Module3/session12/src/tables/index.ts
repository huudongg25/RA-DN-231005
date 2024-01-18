export const createTableUsers = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender INT NOT NULL
  )
`;

export const createTableInfor = `
  CREATE TABLE IF NOT EXISTS information (
    id INT AUTO_INCREMENT NOT NULL UNIQUE PRIMARY KEY,
    userId INT UNIQUE NOT NULL,
    address VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    check(age > 1)
  )
`;
