import { assert } from "chai"
import { postLogin } from "../../../../core/services/login/postLogin.controller.js"
import { TC15 } from "../../../../data/users/usuario.data.js"

describe('POST - Login', () => {
    it('[TC-15] - Deve validar o login com credenciais de um usuário não cadastrado.', async () => {
        let loginUsuario = await postLogin(TC15.email, TC15.password, TC15.statusCode401)
        assert.equal(loginUsuario.json.message, TC15.responseMessage401, "A mensagem é diferente do esperado.")
    })
})