const { getDatabase } = require('../config/mongodb')
const { ObjectId } = require('mongodb')

class Series {
  static find() {
    return getDatabase().collection("tvSeries").find().toArray()
  }

  static create(series) {
    return getDatabase().collection("tvSeries").insertOne(series)
  }

  static findPK(id) {
    return getDatabase().collection("tvSeries").find({ _id: ObjectId(id) })
  }

  static update(id, series) {
    return getDatabase().collection("tvSeries").replaceOne({ _id: ObjectId(id) }, series, { upsert: true })
  }

  static delete(id) {
    return getDatabase().collection("tvSeries").deleteOne({ _id: ObjectId(id) })
  }
}

module.exports = Series