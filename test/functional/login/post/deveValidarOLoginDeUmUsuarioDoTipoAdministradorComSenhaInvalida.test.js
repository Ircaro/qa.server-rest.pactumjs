import { assert } from "chai"
import { postLogin } from "../../../../core/services/login/postLogin.controller.js"
import { postUsuarios } from "../../../../core/services/users/postUsuarios.service.js"
import { TC14 } from "../../../../data/users/usuario.data.js"

describe('POST - Login', () => {
    let usuarioCliente
    before('Cadastrar um usuário do tipo Administrador.', async () => {
        usuarioCliente = await postUsuarios(TC14) 
    })

    it('[TC-14] - Deve validar o login de um usuário do tipo Administrador com senha inválida.', async () => {
        let loginUsuario = await postLogin(TC14.email, TC14.incorretPassword, TC14.statusCode401)
        assert.equal(loginUsuario.json.message, TC14.responseMessage401, "A mensagem é diferente do esperado.")
    })
})