const controller = {
    index: function(req, res) {
        res.send(`Ni Superman, Iron
        Man o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y
        hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como
        inspiración para poder cumplir tus objetivos`);
      },

      creditos: function(req, res) {
        res.render('creditos')
      }
      
  }
module.exports = controller;