import { assert } from 'chai'
import { deleteUsuarios } from '../../../core/services/users/deleteUsuarios.service.js'

describe("POST - Usuários", () => {
    it('[TC-07] - Deve validar a exclusão de um usuário com ID inválido.', async () => {
        let deletarUsuario = await deleteUsuarios("123456")
        assert.equal(deletarUsuario.json.message, "Nenhum registro excluído", "A mensagem é diferente do esperado.")
    })
})
