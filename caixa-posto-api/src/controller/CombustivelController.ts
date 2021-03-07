import { getManager } from "typeorm";
import { Combustivel } from "../entity/Combustivel";

export class CombustivelController {

    async salvar(combustiveis: Combustivel[]): Promise<Combustivel[]> {
        const combSalvos = await getManager().save(combustiveis);
        return combSalvos;
    }

    async obterTodos(): Promise<Combustivel[]> {
        const todos = await getManager().find(Combustivel);
        return todos;
    }
}