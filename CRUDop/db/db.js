import pkg from 'pg';
const {Pool} = pkg;

export const pool = new Pool({
    user: 'admin',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'FilmsAndGenres'
});

