export = {
  database: {
    main: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
    },
  },
  server: {
    port: process.env.SERVER_PORT || 3001,
    host: process.env.SERVER_HOST || '127.0.0.1',
    name: process.env.SERVER_NAME || 'MEAN-Starter',
    socket: {
      port: process.env.SERVER_SOCKET_PORT || 443,
    },
  },
};
