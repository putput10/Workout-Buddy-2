const seedProfiles = require('./seeds-profile');
const seedWorkout = require('./seeds-workout');
const seedPost = require('./seeds-post');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedProfiles();
    console.log('\n----- PROFILES SEEDED -----\n');
  
    await seedWorkout();
    console.log('\n----- WORKOUTS SEEDED -----\n');

    await seedPost();
    console.log('\n----- POSTS SEEDED -----\n')
    
    process.exit(0);
  };
  
  seedAll()