let heroes = require('../data/heroes.json');

module.exports = {
    list: function (req, res) {
      res.send(heroes);
      },

    detalle: function (req, res) {      
     let heroesProfesion = heroes.find(function(valor) {
       return valor.id == req.params.id;
     })
     if(heroesProfesion == undefined) {
       res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id')
     } else {
      res.render('./profesion/detalle', {datosHeroes: heroesProfesion})
     }
     
    },

    resenia: function(req, res) {
      let heroesProfesion = heroes.find(function(valor) {
        return valor.id == req.params.id;
      })
      if(heroesProfesion == undefined) {
        res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id')
      } else {
        res.render('./resenia/tipo', {datosHeroes: heroesProfesion})
      }

    }
    
}