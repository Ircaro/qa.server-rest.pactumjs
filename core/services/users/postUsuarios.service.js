import pactum from "pactum";

export async function postUsuarios(data, statusCodeResponse = 201) {
    return await pactum.spec()
        .post('https://serverest.dev/usuarios')
        .withBody({
            nome: data.nome,
            email: data.email,
            password: data.password,
            administrador: data.administrador
        })
        .expectStatus(statusCodeResponse)
}