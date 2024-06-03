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
      "artists",
      [
        {
          id:1,
          name: "Katherine von Drachenberg",
          Bio: "Es una gran tatuadora se hizo famosa por su participación en los programas de televisión Miami Ink ",
          Specialty:"Conocida por su estilo, y por su habilidad para capturar detalles realistas en sus tatuajes.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:2,
          name: "Ami James",
          Bio: "Es un tatuador israelí-estadounidense conocido por su participación en los programa NY Ink",
          Specialty:" Especializado en rejuvenecimiento de restauración de tatuajes.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:3,
          name: " Nikko Hurtado",
          Bio: "Es un tatuador famoso por su habilidad en el realismo a color. Ha aparecido en diversos programas ",
          Specialty:" Especializado en la realización de tatuajes de nuestros catálogo.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:4,
          name: "Yoshihito Nakano",
          Bio: "Es uno de los tatuadores japoneses más reconocidos y ha sido una gran influencia en el mundo del tatuaje ",
          Specialty:" Especializado en el estilo Irezumi, el tradicional tatuaje japonés, caracterizado por sus grandes piezas con temas mitológicos",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:5,
          name: "Brian Woo",
          Bio: "Es una talentosa tatuadora nacida en Turquía, su trabajo ha ganado reconocimiento internacional",
          Specialty:"Especializada en todo lo que se refiere a la colocación de piercings y dilatadores",
          createdAt:new Date(),
          updatedAt:new Date(),
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

    await queryInterface.bulkDelete("artists", null, {});
  },
};
