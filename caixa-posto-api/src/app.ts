import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routerCaixa } from './route/caixa';
import { routerCombustivel } from './route/combustivel';

//Cria aplicacao
export const app = express();

//Libera cors
app.use(cors());

//Usar json no parser
app.use(bodyParser.json());

//Usar morgan como logger
app.use(logger('dev'));

//Iniciar conexao BD
conectarServidorNoBD();

//Configuracao de rotas
app.use('/caixa', routerCaixa);
app.use('/combustivel', routerCombustivel);
app.use('/', (req, res) => res.send('API do app Caixa Posto'));