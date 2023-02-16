export default interface IFood {
    id: number,
    name: string,
    flavor: 'DOCE' | 'SALGADO',
    value: number,
    healthy: boolean,
    stock: number
}