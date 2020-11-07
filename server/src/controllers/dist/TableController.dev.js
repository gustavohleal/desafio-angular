"use strict";

var table = [{
  'usuário': 'String',
  'paramêtro': 0,
  'tipoLinha': 0,
  'transmissão': 0,
  'sequenciaEnergética': 0,
  'produtividade': 0,
  'lucratividade': 0,
  'liquidez': 0,
  'crescimento': 0,
  'rendimento': 0
}, {
  'usuário': 'String',
  'paramêtro': 0,
  'tipoLinha': 0,
  'transmissão': 0,
  'sequenciaEnergética': 0,
  'crescimento': 0,
  'rendimento': 0
}, {
  'usuário': 'String',
  'paramêtro': 0,
  'tipoLinha': 0,
  'transmissão': 0,
  'sequenciaEnergética': 0,
  'produtividade': 0,
  'lucratividade': 0,
  'liquidez': 0,
  'rendimento': 0
}, {
  'usuário': 'String',
  'paramêtro': 0,
  'transmissão': 0,
  'sequenciaEnergética': 0,
  'lucratividade': 0,
  'liquidez': 0,
  'crescimento': 0,
  'rendimento': 0
}, {
  'usuário': 'String',
  'paramêtro': 0,
  'tipoLinha': 0,
  'transmissão': 0,
  'produtividade': 0,
  'lucratividade': 0,
  'crescimento': 0,
  'rendimento': 0
}];
module.exports = {
  getTable: function getTable(req, res) {
    return res.json(table);
  }
};