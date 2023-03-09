

const express = require("express");
const app = express();
const port = 8000;
const { faker } = require( '@faker-js/faker');

const createUser = () => ({
    
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNum: faker.phone.number(),
        email: faker.internet.exampleEmail(),
        password: faker.internet.password(8)
});

const createCompany = () => ({

    name: faker.company.name(),
    address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        slogan: faker.company.bs()
    }
})

app.get("/api", (req, res) => {
    res.json({ message: "Helloooo World man" });
});

app.get("/api/user/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
    
});

app.get("/api/company/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
    
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );