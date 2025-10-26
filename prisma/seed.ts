const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

export {}

const prisma = new PrismaClient();

const password = await bcrypt.hash('admin123', 10);

const userSeed = await prisma.user.create({
  data: {
    email: 'admin@mail.com',
    name: 'Admin',
    role: 'ADMIN',
    password,
  },
});

console.log(userSeed);
