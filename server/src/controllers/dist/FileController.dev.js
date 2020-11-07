"use strict";

module.exports = {
  getFile: function getFile(req, res) {
    var file = __dirname + '/../uploads/' + req.params.nome;
    return res.download(file);
  }
};