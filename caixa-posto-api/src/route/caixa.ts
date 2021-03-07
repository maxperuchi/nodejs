import { Router } from 'express';
import { CaixaController } from '../controller/CaixaController';
import { Caixa } from '../entity/Caixa';
import { Leitura } from '../entity/Leitura';

export const routerCaixa = Router();
const caixaCtrl = new CaixaController();

routerCaixa.post('/', async (req, res) => {
    const leituras = req.body.leituras.map(l => new Leitura(new Date(l.data), l.bomba, l.term, l.inic, l.afericao, l.litros, l.valor));
    const dia = new Date(req.body.dia);
    const caixa = new Caixa(
        dia,
        req.body.turno,
        req.body.trocoInicial,
        req.body.moedasInicial,
        req.body.vendaProdutos,
        req.body.recebimentos,
        req.body.trocoFinal,
        req.body.moedasFinal,
        req.body.totalFiado,
        req.body.cartoesPix,
        req.body.dinheiro,
        req.body.retiradaCaixa,
        req.body.arla,
        req.body.vales,
        req.body.somaLeituras,
        req.body.somaTotalA,
        req.body.somaTotalB,
        req.body.diferenca,
        leituras
    );

    const caixaSalvo = await caixaCtrl.salvar(caixa);
    res.json(caixaSalvo);
});

routerCaixa.get('/novo/:turno', async (req, res) => {
    const turno = req.params.turno;
    const novoCaixa = await caixaCtrl.novo(turno);
    res.json(novoCaixa);
});

routerCaixa.get('/data/:data', async (req, res) => {
    const data = new Date(req.params.data);
    const caixas = await caixaCtrl.buscarPorData(data);
    res.json(caixas);
});