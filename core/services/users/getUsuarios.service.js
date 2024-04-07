import pactum from "pactum";

export async function getUsuarios(email){
    return await pactum.spec()
        .get("https://serverest.dev/usuarios")
        .withQueryParams(email)
}