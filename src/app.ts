import App from './server';
import DocumentsController from '../controllers/documents';
import CategoriesController from '../controllers/categories';
import AccountsController from '../controllers/accounts';
import UserController from '../controllers/users'
import LoginsController from '../controllers/logins'
import logger from '../middleware/logger';
import * as bodyParser from 'body-parser';

// integrate env files
import * as dotenv from "dotenv";
dotenv.config()

const app = new App({
   port: 5000,
   middlewares: [
      logger,
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
   ],
   controllers: [
      new DocumentsController(),
      new CategoriesController(),
      new AccountsController(),
      new UserController(),
      new LoginsController()
   ]
});

app.listen();