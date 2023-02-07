const { Profile } = require('../models');

const profileData = [
    {
        id: 1,
        firstName: "Beto",
        lastName: "De Armas",
        email: "betoEmail@gmail.com",
        username: 'nosbeto',
        password: 'password1'
    },
    {
        id: 2,
        firstName: "Charles",
        lastName: "Putney",
        email: "charlesEmail@gmail.com",
        username: 'charlesUsr',
        password: 'password1'
    },
    {
        id: 3,
        firstName: "Jamaia",
        lastName: "B",
        email: "JamaiaEmail@gmail.com",
        username: 'JamaiaUsr',
        password: 'password1'
    },
]

const seedProfiles = () => Profile.bulkCreate(profileData)

module.exports = seedProfiles;