import express, { Express } from 'express';
import dotenv from 'dotenv';
const bodyParser = require('body-parser');
import logger from './utils/logger';
import Email from './routes/email';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Swagger documentation
const swaggerDocument = YAML.load(path.resolve(__dirname, '../swagger.yaml'));

//settings
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//routes
app.use('/api/v1/', Email);

app.listen(port, () => {
  const message = `🚀 [server]: Server is running at http://localhost:${port} 🚀`;
  console.log(message);
  logger(message);
});


export default app;
