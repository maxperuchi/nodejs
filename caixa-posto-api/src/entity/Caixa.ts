import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Leitura } from "./Leitura";

@Entity()
export class Caixa {

    constructor(
        dia: Date,
        turno: string,
        trocoInicial: number,
        moedasInicial: number,
        vendaProdutos: number,
        recebimentos: number,
        trocoFinal: number,
        moedasFinal: number,
        totalFiado: number,
        cartoesPix: number,
        dinheiro: number,
        retiradaCaixa: number,
        arla: number,
        vales: number,
        somaLeituras: number,
        somaTotalA: number,
        somaTotalB: number,
        diferenca: number,
        leituras: Leitura[]
    ) {
        this.dia = dia;
        this.turno = turno;
        this.trocoInicial = trocoInicial;
        this.moedasInicial = moedasInicial;
        this.vendaProdutos = vendaProdutos;
        this.recebimentos = recebimentos;
        this.trocoFinal = trocoFinal;
        this.moedasFinal = moedasFinal;
        this.totalFiado = totalFiado;
        this.cartoesPix = cartoesPix;
        this.dinheiro = dinheiro;
        this.retiradaCaixa = retiradaCaixa;
        this.arla = arla;
        this.vales = vales;
        this.somaLeituras = somaLeituras;
        this.somaTotalA = somaTotalA;
        this.somaTotalB = somaTotalB;
        this.diferenca = diferenca;
        this.leituras = leituras;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dia: Date;

    @Column()
    turno: string;

    @Column({ type: 'float' })
    trocoInicial: number;

    @Column({ type: 'float' })
    moedasInicial: number;

    @Column({ type: 'float' })
    vendaProdutos: number;

    @Column({ type: 'float' })
    recebimentos: number;

    @Column({ type: 'float' })
    trocoFinal: number;

    @Column({ type: 'float' })
    moedasFinal: number;

    @Column({ type: 'float' })
    totalFiado: number;

    @Column({ type: 'float' })
    cartoesPix: number;

    @Column({ type: 'float' })
    dinheiro: number;

    @Column({ type: 'float' })
    retiradaCaixa: number;

    @Column({ type: 'float' })
    arla: number;

    @Column({ type: 'float' })
    vales: number;

    @Column({ type: 'float' })
    somaLeituras: number;

    @Column({ type: 'float' })
    somaTotalA: number;

    @Column({ type: 'float' })
    somaTotalB: number;

    @Column({ type: 'float' })
    diferenca: number;

    @OneToMany(() => Leitura, l => l.caixa)
    leituras: Leitura[];
}