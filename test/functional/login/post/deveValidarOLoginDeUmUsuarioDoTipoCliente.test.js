import { assert, expect } from "chai"
import { postLogin } from "../../../../core/services/login/postLogin.controller.js"
import { postUsuarios } from "../../../../core/services/users/postUsuarios.service.js"
import { TC11 } from "../../../../data/users/usuario.data.js"

describe('POST - Login', () => {
    let usuarioCliente
    before('Cadastrar um usuário do tipo cliente.', async () => {
        usuarioCliente = await postUsuarios(TC11)
    })

    it('[TC-11] - Deve validar o login de um usuário do tipo cliente.', async () => {
        let loginUsuario = await postLogin(TC11.email, TC11.password)
        assert.equal(loginUsuario.json.message, TC11.responseMessage200, "A mensagem foi diferente do esperado.")
        expect(loginUsuario.json).to.have.property('authorization')
        expect(loginUsuario.json.authorization).to.be.a("string")
        // console.log(loginUsuario.json)
    })
})