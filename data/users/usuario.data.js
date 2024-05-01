import { faker } from "@faker-js/faker"

export const TC01 = {
    nome: faker.person.fullName({
        firstName: "tc01"
    }),
    email: faker.internet.email({
        firstName: "tc01"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "false"
}

export const TC02 = {
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

export const TC03 = {
    nome: faker.person.fullName({
        firstName: "tc03"
    }),
    email: faker.internet.email({
        firstName: "tc03",
        allowSpecialCharacters: true
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "false",
    responseMessage400: "Este email já está sendo usado"
}

export const TC04 = {
    nome: faker.person.fullName({
        firstName: "tc04"
    }),
    email: faker.internet.email({
        firstName: "tc04"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "true",
    responseMessage400: "Este email já está sendo usado"
}

export const TC05 = {
    nome: faker.person.fullName({
        firstName: "tc05"
    }),
    email: faker.internet.email({
        firstName: "tc05"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "false",
    responseMessage200: "Registro excluído com sucesso" 
}

export const TC06 = {
    nome: faker.person.fullName({
        firstName: "tc06"
    }),
    email: faker.internet.email({
        firstName: "tc06"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "true",
    responseMessage200: "Registro excluído com sucesso" 
}

export const TC07 = { invalidID: "123456", responseMessage200: "Nenhum registro excluído" }

export const TC08 = {
    nome: faker.person.fullName({
        firstName: "tc08"
    }),
    email: faker.internet.email({
        firstName: "tc08"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "false"
}

export const TC11 = {
    nome: faker.person.fullName({
        firstName: "tc11"
    }),
    email: faker.internet.email({
        firstName: "tc11"
    }),
    password: faker.internet.password({
        length: 6
    }),
    administrador: "false",
    responseMessage200: "Login realizado com sucesso"
}