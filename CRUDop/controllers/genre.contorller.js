import {pool as db} from "../db/db.js";

export class genreController {
    async createGenre(req, res) {
        const {name_genre, film_id} = JSON.parse(req.body);

        const newGenre = await db.query(`INSERT INTO genre (name_genre, film_id) values ($1, $2) RETURNING *`, [name_genre, film_id]);

        console.log(newGenre.rows);
    }

    async getGenresByFilm(req, res) {
        const {film_id} = JSON.parse(req.body);

        const genres = await db.query(`SELECT * FROM genre WHERE film_id = $1`, [film_id]);

        console.log(genres.rows);
    }

    async updateGenre(req, res) {
        const {id, name_genre, film_id} = JSON.parse(req.body);

        const upGenre = await db.query(`UPDATE genre SET name_genre = $1, film_id = $2 where id = $3`, [name_genre, film_id, id]);

        console.log(upGenre.rows);
    }

    async deleteGenre(req, res) {
        const splitUrl = req.url.split("/");
        const takeLastInUrl = splitUrl[splitUrl.length - 1].split(":");
        const id = Number(takeLastInUrl[takeLastInUrl.length - 1]);

        const delGenre = await db.query(`DELETE FROM genre WHERE id = $1`, [id]);

        console.log(delGenre.rows);
    }
}