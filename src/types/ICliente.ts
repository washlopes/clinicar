export interface ICliente {
    codigo?: number,
    nome: string,
    cpf: number,
    cor: string,
    estadoCivil: string,
    sexo: string,
    pai: string,
    mae: string,
    dataNascimento: Date,
    profissao: string,
    indicacao: string,
    endereco: string,
    numero: number,
    complemento: string,
    bairro: string,
    municipio: string,
    uf: string,
    cep: string,
    telefoneResidencial: string,
    telefoneComercial: string,
    telefoneCelular: string,
    email: string
}