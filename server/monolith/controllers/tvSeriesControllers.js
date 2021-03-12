const TvSeriesModel = require('../models/tvSeries')

class TVSeriesController {
  static async findAll(req, res, next) {
    try {
      const series = await TvSeriesModel.find();
      res.status(200).json(series)
    } catch (error) {
      res.status(500).json({ message })
    }
  }

  static async addTVSeries(req, res, next) {
    try {
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }

      const series = await TvSeriesModel.create(input)
      // console.log(series)
      res.status(201).json('Series added successfully')
    } catch (error) {
      res.status(500).json({ message })
    }
  }

  static async findByID(req, res, next) {
    try {
      const id = req.params.id

      const series = await TvSeriesModel.findPK(id)
      res.status(200).json(series)
    } catch (error) {
      res.status(500).json({ message })
    }
  }

  static async updateTVSeries(req, res, next) {
    try {
      const id = req.params.id
      const input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popular: parseFloat(req.body.popular),
        tags: req.body.tags
      }
      const series = await TvSeriesModel.update(id, input)
      // console.log(series)
      res.status(200).json('Series updated successfully')
    } catch (error) {
      res.status(500).json({ message })
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id

      const series = await TvSeriesModel.delete(id)
      // console.log(series)
      res.status(200).json('Series deleted successfully')
    } catch (error) {
      res.status(500).json({ message })
    }
  }
}

module.exports = TVSeriesController