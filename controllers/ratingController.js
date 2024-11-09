const Rating = require('../models/ratingModel');

exports.guardarValoracion = async function (req, res) {
    const { rating, comentario } = req.body;
  
    try {
      const result = await Rating.guardarValoracion(rating, comentario);
      res.status(200).json({ message: 'Valoración guardada exitosamente' });
    } catch (error) {
      console.error('Error al guardar la valoración:', error);
      res.status(500).json({ error: 'Error al guardar la valoración' });
    }
  };
  
  exports.obtenerValoraciones = async function (req, res) {
    try {
      const valoraciones = await Rating.obtenerValoraciones();
      res.status(200).json(valoraciones);
    } catch (error) {
      console.error('Error al obtener las valoraciones:', error);
      res.status(500).json({ error: 'Error al obtener las valoraciones' });
    }
  };