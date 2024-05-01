import { assert, expect } from "chai"
import { postUsuarios } from "../../../../core/services/users/postUsuarios.service.js"
import { TC12 } from "../../../../data/users/usuario.data.js"
import { postLogin } from "../../../../core/services/login/postLogin.controller.js"

describe('POST - Login' , () => {

    let usuarioAdmin
    before('Cadastrar um usuário do tipo Administrador', async () => {
        usuarioAdmin = await postUsuarios(TC12)
    })

    it ('[TC-12] - Deve validar o login de um usuário do tipo administrador.', async () => {
        let loginUsuario = await postLogin(TC12.email, TC12.password)
        assert.equal(loginUsuario.json.message, TC12.responseMessage200, "A mensagem é diferente do esperado.")
        expect(loginUsuario.json).to.have.property('authorization')
        expect(loginUsuario.json.authorization).to.be.a("string")
    })
})