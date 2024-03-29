/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
	pgm.sql(`
		CREATE Table users (
			id SERIAL PRIMARY KEY,
			created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
			username VARCHAR(30) NOT NULL,
			bio VARCHAR(400)
		);	
	`)
};

exports.down = pgm => {
	pgm.sql(`
		DROP TABLE users;
	`)
};
