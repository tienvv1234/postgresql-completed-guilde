module.exports = (rows) => {
	const result = rows.map((row) => {
		const replace = {};

		for (let key in row) {
			const camelCase = key.replace(/([-_][a-z])/gi, ($1) => $1.toLocaleUpperCase().replace('_', ''));
			replace[camelCase] = row[key];
		}
		return replace;
	});

	return result;
}