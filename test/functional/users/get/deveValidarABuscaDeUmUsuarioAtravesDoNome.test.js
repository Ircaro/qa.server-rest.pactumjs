import { assert, expect } from "chai"
import { buscarUsuariosAtravesDoEmail, buscarUsuariosAtravesDoID, buscarUsuariosAtravesDoNome } from "../../../../core/services/users/getUsuarios.service.js"
import { postUsuarios } from "../../../../core/services/users/postUsuarios.service.js"
import { TC08 } from "../../../../data/users/usuario.data.js"


describe('GET - Usuarios', () => {
    let usuarioCadastrado
    before('Cadastrar um usuário', async () => {
       usuarioCadastrado = await postUsuarios(TC08)
    })

    // it('[TC-08] - Deve validar a busca de um usuário através do nome', async () => {
    //     let usuario = await buscarUsuariosAtravesDoNome(TC08.nome)
    //     assert.equal(usuario.usuarios[0].nome, TC08.nome, "O nome é diferente do esperado.")
    //     assert.equal(usuario.usuarios[0].email, TC08.email, "O email é diferente do esperado")
    // })

    // it('[TC-09] - Deve validar a busca de um usuário através do id', async () => {
    //     let usuario = await buscarUsuariosAtravesDoID(usuarioCadastrado.json._id)
    //     assert.equal(usuario.usuarios[0].nome, TC08.nome, "O nome é diferente do esperado.")
    //     assert.equal(usuario.usuarios[0].email, TC08.email, "O email é diferente do esperado")
    // })

    it('[TC-10] - Deve validar a busca de um usuário através do email', async () => {
        let response = await buscarUsuariosAtravesDoEmail(TC08.email)
        console.log(response)
    })
})