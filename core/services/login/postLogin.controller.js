import pactum from "pactum"

export async function postLogin(email, password, statusCodeResponse = 200) {
    return await pactum.spec()
        .post("https://serverest.dev/login")
        .withBody({
            email: email,
            password: password
        })
        .expectStatus(statusCodeResponse)
}