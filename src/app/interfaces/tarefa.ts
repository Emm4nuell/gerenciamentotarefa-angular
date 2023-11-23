export interface Tarefa {
    id?: any;
    nometarefa: String;
    descricao: String;
    datacriacao: String;
    datarecebimento: String;
    dataconcluido: String;
    observacao: String;
    status: String;
    usuario: {
        id: String;
    };
}
