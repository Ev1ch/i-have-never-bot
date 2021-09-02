module.exports = {
    production: {
        username: 'apevdgkhpytsoq',
        password:
            '42ff2d82d088db937c20514f4d79a52f81d49f2dd0efb3bbca99e2fbbebb33ad',
        host: 'ec2-44-198-24-0.compute-1.amazonaws.com',
        database: 'd33jjindivb8h1',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};
