import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "SOPKATHON API",
      version: "1.0.0",
      description: "Document For SOPKATHON @l2hyunwoo @chaen",
    },
    servers: [{ url: "" }],
  },
  apis: [],
};
const swaggerSpecs = swaggerJSDoc(swaggerOptions);

export default swaggerSpecs;
