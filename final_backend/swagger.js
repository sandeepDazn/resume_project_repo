import swaggerAutogen from "swagger-autogen";

const swaggerInstance = swaggerAutogen();

const outputFile ='./swagger_output.json';
const endPointFile =['./routes/*.js'];

swaggerInstance(outputFile, endPointFile).then(() => {
    import('./server.js'); // Your Express app entry point
  });