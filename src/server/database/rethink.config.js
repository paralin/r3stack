export default {
  host: 'rethinkdb.dev.azk.io',
  port: 28015,
  db: process.env.NODE_ENV === 'testing' ? 'ava' : 'r3stack',
  min: process.env.NODE_ENV === 'production' ? 50 : 3,
  buffer: process.env.NODE_ENV === 'production' ? 50 : 3
}

