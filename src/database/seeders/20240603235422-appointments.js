"use strict";

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
      "appointments",
      [
        {
          id:1,
          appointment_date: "2024-05-01 11:30:00",
          user_id: 2,
          service_id:1,
          artist_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:2,
          appointment_date: "2024-05-03 16:00:00",
          user_id: 3,
          service_id:2,
          artist_id:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:3,
          appointment_date: "2024-05-04 18:00:00",
          user_id: 4,
          service_id:3,
          artist_id:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:4,
          appointment_date: "2024-05-06 13:20:00",
          user_id: 5,
          service_id:4,
          artist_id:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:5,
          appointment_date: "2024-05-07 09:45:00",
          user_id: 6,
          service_id:5,
          artist_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:6,
          appointment_date: "2024-05-08 17:00:00",
          user_id: 7,
          service_id:5,
          artist_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:7,
          appointment_date: "2024-05-08 19:20:00",
          user_id: 8,
          service_id:3,
          artist_id:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:8,
          appointment_date: "2024-05-10 10:20:00",
          user_id: 9,
          service_id:4,
          artist_id:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:9,
          appointment_date: "2024-05-12 12:10:00",
          user_id: 10,
          service_id:3,
          artist_id:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:10,
          appointment_date: "2024-05-14 10:15:00",
          user_id: 11,
          service_id:2,
          artist_id:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:11,
          appointment_date: "2024-05-16 16:45:00",
          user_id: 12,
          service_id:1,
          artist_id:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:12,
          appointment_date: "2024-05-18 17:00:00",
          user_id: 13,
          service_id:2,
          artist_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:13,
          appointment_date: "2024-05-20 14:30:00",
          user_id: 14,
          service_id:4,
          artist_id:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:14,
          appointment_date: "2024-05-22 10:00:00",
          user_id: 15,
          service_id:1,
          artist_id:4,
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
    await queryInterface.bulkDelete("appointments", null, {});
  },
};
