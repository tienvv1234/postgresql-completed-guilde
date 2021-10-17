const pg = require('pg');

const pool = new pg.Pool({
	host: 'localhost',
	post: 5432,
	database: 'socialnetwork',
	user: 'postgres',
	password: '123456'
});

pool.query(`
	UPDATE posts
	SET loc= POINT(lng, lat)
	WHERE loc IS NULL;
`).then(() => {
	console.log("Update complete");
	pool.end();
}).catch((error) => console.error(error));