const {faker} = require ('@faker-js/faker')
const express = require("express");
const app = express();
const port = 8000;



class User {
    constructor() {
      this.id = faker.address.zipCode()
      this.firstName = faker.name.firstName()
      this.lastName = faker.name.lastName()
      this.phoneNumber = faker.phone.phoneNumber()
      this.email = faker.internet.email()
      this.password = faker.internet.password()
    }
  }



  
class Company {
    constructor() {
        this.id = faker.address.zipCode()
        this.name = faker.company.companyName()
        this.address =[
            this.street = faker.address.streetAddress(),
            this.city = faker.address.city(),
            this.state = faker.address.state(),
            this.zipCode = faker.address.zipCode(),
            this.county = faker.address.county()
        ]
    }
}

  console.log(new User());
  console.log(new Company());



app.get("/api/user", (req,res) =>{
    let fakeUser = new User()

    res.json({fakeUser})
})


app.get("/api/company", (req,res) =>{
    let fakeCompany = new Company()

    res.json({fakeCompany})
})

app.get("/api/company_user", (req,res) =>{
    let fakeCompany_User = [new User(),new Company()]

    res.json({fakeCompany_User})
})




app.listen( port, () => console.log(`Listening on port: ${port}`) );
