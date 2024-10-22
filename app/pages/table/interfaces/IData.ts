export interface IData {
    rows: Rows[]
    cells: string[]
}

export interface Rows {
    data: string,
    assinatura: string,
    nome: string,
    cnpj: string,
    contato: string,
    email: string,
    ultimaTransacao: string,
    status: string,
    acao: string,
}