import { assert } from 'chai'
import { deleteUsuarios } from '../../../core/services/users/deleteUsuarios.service.js'
import { TC07 } from '../../../data/users/usuario.data.js'

describe("POST - Usuários", () => {
    it('[TC-07] - Deve validar a exclusão de um usuário com ID inválido.', async () => {
        let deletarUsuario = await deleteUsuarios(TC07.invalidID)
        assert.equal(deletarUsuario.json.message, TC07.responseMessage200, "A mensagem é diferente do esperado.")
    })
})
