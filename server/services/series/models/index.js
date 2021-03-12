const { getDatabase } = require('../config/mongodb')
const { ObjectId } = require('mongodb')

class Series {
  static find() {
    return getDatabase().collection("series").find().toArray()
  }

  static create(series) {
    return getDatabase().collection("series").insertOne(series)
  }

  static update(id, series) {
    return getDatabase().collection("series").replaceOne({ _id: ObjectId(id) }, series, { upsert: true })
  }

  static delete(id) {
    return getDatabase().collection("series").deleteOne({ _id: ObjectId(id) })
  }
}

module.exports = Series