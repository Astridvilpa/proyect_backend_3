"use strict";
const bcrypt = require("bcrypt");
const plainPassword = "12345678";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          first_name: "Carolina",
          last_name: "Palacios",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          first_name: "Alejandro",
          last_name: "Gómez",
          email: "alejandro.gomez@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          first_name: "Beatriz",
          last_name: "Martínez",
          email: "beatriz.martinez@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          first_name: "Diana",
          last_name: "López",
          email: "diana.lopez@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          first_name: "Fernanda",
          last_name: "Torres",
          email: "fernanda.torres@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          first_name: "Gabriel",
          last_name: "Ramírez",
          email: "gabriel.ramirez@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          first_name: "Helena",
          last_name: "Ruiz",
          email: "helena.ruiz@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          first_name: "Ignacio",
          last_name: "Pérez",
          email: "ignacio.perez@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          first_name: "Julia",
          last_name: "Hernández",
          email: "julia.hernandez@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          first_name: "Kevin",
          last_name: "Castro",
          email: "kevin.castro@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          first_name: "Laura",
          last_name: "Morales",
          email: "laura.morales@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          first_name: "Miguel",
          last_name: "Vargas",
          email: "miguel.vargas@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          first_name: "Natalia",
          last_name: "Soto",
          email: "natalia.soto@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          first_name: "Oscar",
          last_name: "Domínguez",
          email: "oscar.dominguez@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          first_name: "Eduardo",
          last_name: "Sánchez",
          email: "eduardo.sanchez@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  
  
  },
};
