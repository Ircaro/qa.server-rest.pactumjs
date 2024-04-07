import { assert, expect } from 'chai'
import { postUsuarios } from '../../../core/services/users/postUsuarios.service.js'
import { TC01 } from '../../../data/users/usuario.data.js'

describe("POST - Usuários", () => {
    it('[TC-01] - Deve validar o cadastro de um usuário do tipo cliente.', async () => {
        let cadastrarUsuario = await postUsuarios(TC01)
        assert.equal(cadastrarUsuario.json.message, "Cadastro realizado com sucesso", "A mensagem é diferente do esperado.")
        expect(cadastrarUsuario.json).to.have.property("_id")
        expect(cadastrarUsuario.json._id).to.have.lengthOf(16)
        expect(cadastrarUsuario.json._id).to.be.a("string")
    })
})
