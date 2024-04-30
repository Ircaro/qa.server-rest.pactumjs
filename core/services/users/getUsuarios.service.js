import pactum from "pactum";

export async function getUsuarios(parametro, valorDoParametro, statusCode = 200){
    return await pactum.spec()
        .get("https://serverest.dev/usuarios")
        .withQueryParams(parametro, valorDoParametro)
        .expectStatus(statusCode)
}

export async function buscarUsuariosAtravesDoNome(nome) {
    let usuario = await getUsuarios("nome", nome)
    return usuario.json
}

export async function buscarUsuariosAtravesDoID(id) {
    let usuario = await getUsuarios("_id", id)
    return usuario.json
}

export async function buscarUsuariosAtravesDoEmail(email) {
    let usuario = await getUsuarios("email", email)
    return usuario.json
}