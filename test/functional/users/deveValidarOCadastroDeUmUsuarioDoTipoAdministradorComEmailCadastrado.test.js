import { assert, expect } from 'chai'
import { postUsuarios } from '../../../core/services/users/postUsuarios.service.js'
import { TC04 } from '../../../data/users/usuario.data.js'

describe("POST - Usuários", () => {
    before(function () {
        postUsuarios(TC04)
    })
    it('[TC-04] - Deve validar o cadastro de um usuário do tipo administrador com um e-mail já cadastrado.', async () => {
        let cadastrarUsuario = await postUsuarios(TC04, 400)
        assert.equal(cadastrarUsuario.json.message, "Este email já está sendo usado", "A mensagem é diferente do esperado.")
        expect(cadastrarUsuario.json).to.have.property("message")
        // expect(cadastrarUsuario.json._id).to.have.lengthOf(16)
        expect(cadastrarUsuario.json.message).to.be.a("string")
    })
})