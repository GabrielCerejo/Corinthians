var usuarioModel = require("../models/usuarioModel");



function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        if (resultadoAutenticar.length > 0) {
                            res.json({
                                idUsuario: resultadoAutenticar[0].idUsuario,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                senha: resultadoAutenticar[0].senha,
                                dtNasc: resultadoAutenticar[0].dtNasc
                            });
                        } else {
                            res.status(204).json({ aquarios: [] });
                        }
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;
    var dtNasc = req.body.dtNascServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua data está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, cpf, dtNasc, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function finalizar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var corretas = req.body.corretasServer;
    var incorretas = req.body.incorretasServer;
    var idUsuario = req.body.idUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.finalizar(corretas, incorretas, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function mostrar_tentativas(req, res){
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.mostrar_tentativas(idUsuario)

    res.json(tentativas);
}

function select_quiz(req, res) {
    var idUsuario = req.body.idUsuarioServer

    usuarioModel.select_quiz(idUsuario)
        .then(
            function (resultado_quiz) {

                res.json({
                    resultado_quiz
                });
            }
        )
}

function buscar_quiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    const limite_linhas = 1;

    usuarioModel.buscar_quiz(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscar_ultimo(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    const limite_linhas = 1;

    usuarioModel.buscar_ultimo(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    autenticar,
    cadastrar,
    finalizar,
    select_quiz,
    buscar_quiz,
    buscar_ultimo,
    mostrar_tentativas
}