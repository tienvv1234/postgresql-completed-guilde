const pool = require('../pool');
const toCamelCase = require('./utils/to-camel-case')
class UserRepo {
	static async find() {
		const { rows } = await pool.query('SELECT * FROM users;');

		return toCamelCase(rows);
	}
	
	static async findById(id) {
		const { rows } = await pool.query(`
			SELECT * FROM users where id = $1
		`, [id]);

		return toCamelCase(rows)[0];
	}

	static async insert() {
		const { rows } = await pool.query(`
			SELECT * FROM users where id = $1
		`, [id]);

		return toCamelCase(rows)[0];
	}

	static async update() {}

	static async delete() {}

	static async count() {
		const {rows} = await pool.query(`
			SELECT COUNT(*) FROM users;
		`);

		return parseInt(rows[0].count);
	}
}

module.exports = UserRepo;