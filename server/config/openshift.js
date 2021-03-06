module.exports = {
	server : {
		ip: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
		port: process.env.OPENSHIFT_NODEJS_PORT || 8080
	},
	db: {
		conn: process.env.OPENSHIFT_MONGODB_DB_URL + '/socialscoreboard'
	}
};