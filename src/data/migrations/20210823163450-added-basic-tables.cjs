module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('questions_categories', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
        });
        await queryInterface.createTable('questions', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            text: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            category_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'questions_categories',
                    key: 'id',
                },
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
        });
        await queryInterface.createTable('users_stat', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            answered_questions: {
                type: Sequelize.ARRAY(Sequelize.INTEGER),
                defaultValue: [],
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
        });
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            stat_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users_stat',
                    key: 'id',
                },
                onDelete: 'cascade',
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('questions');
        await queryInterface.dropTable('users');
        await queryInterface.dropTable('users_stat');
        await queryInterface.dropTable('questions_categories');
    },
};
