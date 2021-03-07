import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bomba } from "./Bomba";

@Entity()
export class Combustivel {

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({ type: 'float' })
    valor: number;
    
    @OneToMany(() => Bomba, b => b.combustivel)
    bombas: Bomba[];
}