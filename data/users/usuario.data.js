import { faker } from "@faker-js/faker"

const TC01 = {
    nome: faker.person.fullName({
        firstName: "tc01"
    }),
    email: faker.internet.email({
        firstName: "tc01a"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "false"
}

const TC02 = {
    nome: faker.person.fullName({
        firstName: "tc02"
    }),
    email: faker.internet.email({
        firstName: "tc02"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "true"
}

const TC03 = {
    nome: faker.person.fullName({
        firstName: "tc03"
    }),
    email: faker.internet.email({
        firstName: "tc034",
        allowSpecialCharacters: true
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "false"
}

const TC04 = {
    nome: faker.person.fullName({
        firstName: "tc04"
    }),
    email: faker.internet.email({
        firstName: "tc044"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "true"
}

export { TC01, TC02, TC03, TC04 }