module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'questions_categories',
            [
                {
                    name: 'Simple questions',
                },
                {
                    name: 'Adult questions',
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete(
            'questions_categories',
            { id: { [Sequelize.Op.lte]: 2 } },
            {},
        );
    },
};
