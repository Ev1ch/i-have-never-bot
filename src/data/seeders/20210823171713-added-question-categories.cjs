module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'question_categories',
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
            'question_categories',
            { id: { [Sequelize.Op.lte]: 2 } },
            {},
        );
    },
};
