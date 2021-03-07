import { getManager } from "typeorm";
import { Bomba } from "../entity/Bomba";

export class BombaController {

    async salvar(bomba: Bomba): Promise<Bomba> {
        const bombaSalvo = await getManager().save(bomba);
        return bombaSalvo;
    }

    async obterTodos(): Promise<Bomba[]> {
        const bombas = await getManager().find(Bomba, { relations: ["combustivel"] });
        return bombas;
    }
}