const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

// Swagger 설정
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for my Node.js application',
        },
        servers: [
            {
                url: 'http://54.180.144.215:3000/api-docs/', // 서버 URL
            },
        ],
    },
    apis: [path.join(__dirname, '../routes/*.js')],  // routes 폴더의 파일들을 지정
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;

