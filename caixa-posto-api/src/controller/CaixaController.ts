import { getManager, SelectQueryBuilder } from "typeorm";
import { Caixa } from "../entity/Caixa";
import { LeituraController } from "./LeituraController";

export class CaixaController {

    async salvar(caixa: Caixa): Promise<Caixa> {
        const leituraCtrl = new LeituraController();
        const leiturasSalvas = await leituraCtrl.salvar(caixa.leituras);
        caixa.leituras = leiturasSalvas;
        const caixaSalvo = await getManager().save<Caixa>(caixa);
        return caixaSalvo;
    }

    async novo(turno: string): Promise<Caixa> {
        const leituraController = new LeituraController();
        const leiturasNovas = await leituraController.novo();
        const caixaNovo = new Caixa(
            new Date(),
            turno,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            leiturasNovas
        );
        return caixaNovo;
    }

    async buscarPorData(data: Date): Promise<Caixa[]> {
        const inicio = new Date(data.getFullYear(), data.getMonth(), data.getDate(), 0, 0);
        const fim = new Date(data.getFullYear(), data.getMonth(), data.getDate(), 23, 59);
        const caixas = await getManager()
            .getRepository(Caixa)
            .createQueryBuilder("caixa")
            .leftJoinAndSelect("caixa.leituras", "leitura")
            .leftJoinAndSelect("leitura.bomba", "bomba")
            .leftJoinAndSelect("bomba.combustivel", "combustivel")
            .where(":inicio <= caixa.dia AND caixa.dia <= :fim", { inicio, fim })
            .getMany();
        return caixas;
    }
}