let path = require('path');

const client = {
	entry: {
		client: './src/client/index.js'
	},
	target: 'web',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/public')
	}
};

const server = {
	entry: {
		server: './src/server/index.js'
	},
	target: 'node',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};
module.exports = [client, server];
