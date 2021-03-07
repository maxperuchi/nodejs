import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Combustivel } from "./Combustivel";
import { Leitura } from "./Leitura";

@Entity()
export class Bomba {

    constructor(combustivel: Combustivel, numero: number) {
        if (combustivel) {
            this.combustivel = new Combustivel(combustivel.nome, combustivel.valor);
            this.combustivel.id = combustivel.id;
        }

        this.numero = numero;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Combustivel, c => c.bombas)
    combustivel: Combustivel;

    @Column()
    numero: number;

    @OneToMany(() => Leitura, l => l.bomba)
    leituras: Leitura[];
}