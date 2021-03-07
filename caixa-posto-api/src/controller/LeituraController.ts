import { Between, getManager } from "typeorm";
import { Leitura } from "../entity/Leitura";
import { BombaController } from "./BombaController";

export class LeituraController {

    async salvar(leitura: Leitura[]): Promise<Leitura[]> {
        const leiturasSalvas = await getManager().save(leitura);
        return leiturasSalvas;
    }

    async novo(): Promise<Leitura[]> {
        const bombaController = new BombaController();
        const bombas = await bombaController.obterTodos();
        const idUltimoCaixa = await this.getIdUltimoCaixa();
        const ultimasLeituras = idUltimoCaixa !== null ? await getManager()
            .find(Leitura, {
                relations: ["bomba", "bomba.combustivel"],
                where: { caixa: idUltimoCaixa }
            }) : [];

        const leiturasNovas = bombas.map(b => {
            const leituraAnterior = ultimasLeituras.find(l => l.bomba.id === b.id);
            const term = leituraAnterior ? leituraAnterior.term : 0;
            return new Leitura(new Date(), b, term, term, 0, 0, 0);
        });

        return leiturasNovas;
    }

    async getIdUltimoCaixa(): Promise<number> {
        const leituras = await getManager().find(Leitura, { select: ["caixa", "data"], relations: ["caixa"], order: { data: "DESC" } });
        if (leituras && leituras.length > 0) {
            return leituras[0].caixa.id;
        } else {
            return null;
        }
    }
}