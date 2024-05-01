import { assert } from "chai"
import { postLogin } from "../../../../core/services/login/postLogin.controller.js"
import { postUsuarios } from "../../../../core/services/users/postUsuarios.service.js"
import { TC13 } from "../../../../data/users/usuario.data.js"

describe('POST - Login', () => {
    let usuarioCliente
    before('Cadastrar um usuário do tipo cliente.', async () => {
        usuarioCliente = await postUsuarios(TC13) 
    })

    it('[TC-13] - Deve validar o login de um usuário do tipo cliente com senha inválida.', async () => {
        let loginUsuario = await postLogin(TC13.email, TC13.incorretPassword, TC13.statusCode401)
        assert.equal(loginUsuario.json.message, TC13.responseMessage401, "A mensagem é diferente do esperado.")
    })
})