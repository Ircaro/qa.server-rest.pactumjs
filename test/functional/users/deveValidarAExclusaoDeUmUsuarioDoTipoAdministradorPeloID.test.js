import { assert } from 'chai'
import { postUsuarios } from '../../../core/services/users/postUsuarios.service.js'
import { TC06 } from '../../../data/users/usuario.data.js'
import { deleteUsuarios } from '../../../core/services/users/deleteUsuarios.service.js'

describe("POST - Usuários", () => {
    let cadastrarUsuario, deletarUsuario
    before("Cadastrando um usuário do tipo Administrador", async () => {
        cadastrarUsuario = await postUsuarios(TC06)
    })
    it('[TC-06] - Deve validar a exclusão de um usuário do tipo administrador através do ID.', async () => {
        deletarUsuario = await deleteUsuarios(cadastrarUsuario.json._id)
        assert.equal(deletarUsuario.json.message, "Registro excluído com sucesso", "A mensagem é diferente do esperado.")
    })
})
