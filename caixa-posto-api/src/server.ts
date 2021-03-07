import { app } from './app';

const PORTA = 5000;

const server =
    app.listen(PORTA, () => console.log(`App ouvindo na porta ${PORTA}`));

//Encerra app ao finalizar processo
process.on('SIGINT', () => {
    server.close();
    console.log('App finalizado');
});