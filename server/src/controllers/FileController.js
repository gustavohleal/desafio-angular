module.exports = {
  getFile(req, res){
    const file = __dirname + '/../uploads/' + req.params.nome;

    return res.download(file);
  }
}