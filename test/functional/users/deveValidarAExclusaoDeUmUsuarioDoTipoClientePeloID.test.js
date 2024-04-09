import { assert } from 'chai'
import { postUsuarios } from '../../../core/services/users/postUsuarios.service.js'
import { TC05 } from '../../../data/users/usuario.data.js'
import { deleteUsuarios } from '../../../core/services/users/deleteUsuarios.service.js'

describe("POST - Usuários", () => {
    let cadastrarUsuario, deletarUsuario
    before("Cadastrando um usuário do tipo Cliente", async () => {
        cadastrarUsuario = await postUsuarios(TC05)
    })
    it('[TC-05] - Deve validar a exclusão de um usuário do tipo cliente através do ID.', async () => {
        deletarUsuario = await deleteUsuarios(cadastrarUsuario.json._id)
        assert.equal(deletarUsuario.json.message, TC05.responseMessage200, "A mensagem é diferente do esperado.")
    })
})
