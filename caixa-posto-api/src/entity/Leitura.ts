import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bomba } from "./Bomba";
import { Caixa } from "./Caixa";

@Entity()
export class Leitura {

    constructor(data: Date, bomba: Bomba, term: number, inic: number, afericao: number, litros: number, valor: number) {
        if (bomba) {
            this.bomba = new Bomba(bomba.combustivel, bomba.numero);
            this.bomba.id = bomba.id;
        }

        this.data = data;
        

        this.term = term;
        this.inic = inic;
        this.afericao = afericao;
        this.litros = litros;
        this.valor = valor;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Bomba, b => b.leituras)
    bomba: Bomba;

    @Column({ type: 'float' })
    term: number;

    @Column({ type: 'float' })
    inic: number;

    @Column({ type: 'float' })
    afericao: number;

    @Column({ type: 'float' })
    litros: number;

    @Column({ type: 'float' })
    valor: number;

    @Column()
    data: Date;

    @ManyToOne(() => Caixa, c => c.leituras)
    caixa: Caixa;
}