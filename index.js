// const path = require('path');
const glob = require('glob');

// Searches for and returns all .md files that aren't README.md
// IGNORES any directories that start with a '.'
function getMdFiles(baseDir) {
	const paths = glob.sync(`${baseDir}{/!(README).md,/*/**/!(README).md}`);
	return paths;
}

module.exports = function(options, ctx) {
	ctx.sourceDir = ctx.sourceDir.split('\\').join('/');

	const addPages = getMdFiles(ctx.sourceDir).reduce((res, absPath) => {
		const relPath = absPath.replace(ctx.sourceDir, '');

		const tokens = absPath.split('/');
		const relTokens = relPath.split('/');

		const endpoint = tokens[tokens.length - 1].replace('.md', '');
		const parent = tokens[tokens.length - 2];

		if (endpoint.toLowerCase() === parent.toLowerCase()) {
			const base = ctx.base === '/' ? '' : ctx.base;
			relTokens.pop(); // remove endpoint
			res.push({
				path: base + relTokens.join('/') + '/',
				filePath: absPath,
			});
		}
		return res;
	}, []);

	if (options.debug) {
		console.log('matching-index-files:');
		console.log(addPages);
	}

	return {
		additionalPages: addPages,
	};
};
