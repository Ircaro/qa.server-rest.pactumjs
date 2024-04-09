import { assert } from 'chai'
import { postUsuarios } from '../../../core/services/users/postUsuarios.service.js'
import { TC04 } from '../../../data/users/usuario.data.js'

describe("POST - Usuários", () => {
    before("Cadastrando um usuário do tipo Administrador", async () => {
        await postUsuarios(TC04)
    })
    it('[TC-04] - Deve validar o cadastro de um usuário do tipo administrador com um e-mail já cadastrado.', async () => {
        let cadastrarUsuarioComEmailRepetido = await postUsuarios(TC04, 400)
        assert.equal(cadastrarUsuarioComEmailRepetido.json.message, TC04.responseMessage400, "A mensagem é diferente do esperado.")
    })
})
