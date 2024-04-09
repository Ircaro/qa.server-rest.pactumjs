import pactum from "pactum"

export async function deleteUsuarios(id, statusCodeResponse = 200) {
    return await pactum.spec()
    .delete("https://serverest.dev/usuarios/{_id}")
    .withPathParams("_id", id)
    .expectStatus(statusCodeResponse)
}