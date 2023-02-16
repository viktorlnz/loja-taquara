export default interface IComida {
    nome: string,
    sabor: 'DOCE' | 'SALGADO',
    valor: number,
    saudavel: boolean,
    estoque: number
}