import { Router } from 'express';
import { CombustivelController } from '../controller/CombustivelController';
import { Combustivel } from '../entity/Combustivel';

export const routerCombustivel = Router();
const combustivelCtrl = new CombustivelController();

routerCombustivel.post('/', async (req, res) => {
    const combustiveis: Combustivel[] = req.body.map(c => {
        const combus = new Combustivel(c.nome, c.valor);
        if (c.id) {
            combus.id = c.id;
        }
        return combus;
    });
    const salvos = await combustivelCtrl.salvar(combustiveis);
    res.json(salvos);
});

routerCombustivel.get('/todos', async (req, res) => {
    const todos = await combustivelCtrl.obterTodos();
    res.json(todos.sort((a, b) => a.id - b.id));
});