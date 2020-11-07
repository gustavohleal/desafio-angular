const form = [
  {
    "titulo": "Nome Completo",
    "tipo": "text",
    "valor": "Jane Doe",
    "opcoes": []
  },
  {
    "titulo": "Email",
    "tipo": "text",
    "valor": "janedoe@noname.com",
    "opcoes": []
  },
  {
    "titulo": "Endereço",
    "tipo": "text",
    "valor": "Rua das Andradas, 61",
    "opcoes": []
  },
  {
    "titulo": "Idade",
    "tipo": "number",
    "valor": "25",
    "opcoes": []
  },
  {
    "titulo": "Estado Civil",
    "tipo": "select",
    "valor": "Solteiro(a)",
    "opcoes": [
      "Solteiro(a)",
      "Casado(a)",
      "União Estável",
      "Viúvo(a)"
    ]
  },
  {
    "titulo": "Arquivo",
    "tipo": "file",
    "valor": "teste.txt",
    "opcoes": []
  }

]
module.exports = {
  generateForm(req, res) {

    return res.json(form);
  }
}