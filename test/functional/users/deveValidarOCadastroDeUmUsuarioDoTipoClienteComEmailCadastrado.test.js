import { assert } from 'chai'
import { postUsuarios } from '../../../core/services/users/postUsuarios.service.js'
import { TC03 } from '../../../data/users/usuario.data.js'

describe("POST - Usuários", () => {
    before("Realizar cadastro de um usuário do tipo cliente", async () => {
        await postUsuarios(TC03)
    })
    it("[TC-03] - Deve validar o cadastro de um usuário do tipo cliente com um e-mail já cadastrado.", async () => {
        const cadastrarUsuarioComEmailRepetido = await postUsuarios(TC03, 400)
        assert.equal(cadastrarUsuarioComEmailRepetido.json.message, TC03.responseMessage400, "A mensagem é diferente do esperado.")
    })
})
