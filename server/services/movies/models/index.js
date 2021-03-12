const { getDatabase } = require('../config/mongodb')
const { ObjectId } = require('mongodb')

class Movie {
  static find() {
    return getDatabase().collection("movies").find().toArray()
  }

  static create(movie) {
    return getDatabase().collection("movies").insertOne(movie)
  }

  static findPK(id) {
    return getDatabase().collection("movies").find({ _id: ObjectId(id) })
  }

  static update(id, movie) {
    return getDatabase().collection("movies").replaceOne({ _id: ObjectId(id) }, movie, { upsert: true })
  }

  static delete(id) {
    return getDatabase().collection("movies").deleteOne({ _id: ObjectId(id) })
  }
}

module.exports = Movie