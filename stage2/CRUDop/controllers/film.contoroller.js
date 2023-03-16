import {pool as db} from "../db/db.js";

export class filmController {
    async createFilm(req, res) {
        const {title, year} = JSON.parse(req.body);
        const newFilm = await db.query(`INSERT INTO film (film_name, year) values ($1, $2) RETURNING *`, [title, year]);

        console.log(newFilm.rows[0]);
    }

    async getFilms(req, res) {
        const films = await db.query(`SELECT * FROM film`);

        console.log(films.rows);
    }

    async getOneFilm(req, res) {
        const splitUrl = req.url.split("/");
        const takeLastInUrl = splitUrl[splitUrl.length - 1].split(":");
        const id = Number(takeLastInUrl[takeLastInUrl.length - 1]);

        const films = await db.query(`SELECT * FROM film WHERE id = $1`, [id]);

        console.log(films.rows);
    }

    async updateFilm(req, res) {
        const {id, title, year} = JSON.parse(req.body);

        const upFilm = await db.query(`UPDATE film SET film_name = $1, year = $2 where id = $3`, [title, year, id]);

        console.log(upFilm.rows);
    }

    async deleteFilm(req, res) {
        const splitUrl = req.url.split("/");
        const takeLastInUrl = splitUrl[splitUrl.length - 1].split(":");
        const id = Number(takeLastInUrl[takeLastInUrl.length - 1]);

        const delFilm = await db.query(`DELETE FROM film WHERE id = $1`, [id]);

        console.log(delFilm.rows);
    }
}