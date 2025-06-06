import { devNull } from "os";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { Colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);
    if (buscaConta != null) {
      buscaConta.visualizar();
    } else {
      console.log(
        Colors.fg.red,
        "\nA Conta numero: " + numero + " não foi encontrada",
        Colors.reset
      );
    }
  }
  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }
  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(
      Colors.fg.green,
      "\nA Conta número: " + conta.numero + " foi criada com sucesso!",
      Colors.reset
    );
  }
  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(
        Colors.fg.green,
        "\nA conta numero: " + conta.numero + "foi atualizada com sucesso!",
        Colors.reset
      );
    } else {
      console.log(
        Colors.fg.red,
        "\nA conta numero: " + conta.numero + " não foi encontrada!",
        Colors.reset
      );
    }
  }
  delete(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(Colors.fg.green, "\nAconta numero: ", Colors.reset);
    } else {
      console.log(
        Colors.fg.red,
        "\nA conta numero: " + numero + "não foi encontrada!",
        Colors.reset
      );
    }
  }
  sacar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      if (conta.sacar(valor) == true)
        console.log(
          Colors.fg.green,
          "\nO saque na conta numero: " + numero + " foi efetuado com sucesso!",
          Colors.reset
        );
    } else
      console.log(
        Colors.fg.red,
        "\nA Conta numero: " + numero + "não foi encontrada!",
        Colors.reset
      );
  }
  depositar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      conta.depositar(valor);
      console.log(
        Colors.fg.green,
        "\nO Depósito na Conta numero: " +
          numero +
          " foi efetuado com sucesso!",
        Colors.reset
      );
    } else
      console.log(
        Colors.fg.red,
        "\nA conta numero: " + numero + " não foi encontrada!",
        Colors.reset
      );
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem != null && contaDestino != null) {
      if (contaOrigem.sacar(valor) == true) {
        contaDestino.depositar(valor);
        console.log(
          Colors.fg.green,
          "\nA transferencia da conta numero: " +
            numeroOrigem +
            " para a conta numero: " +
            numeroDestino +
            " foi efetuada com sucesso!",
          Colors.reset
        );
      }
    } else
      console.log(
        Colors.fg.red,
        "\nA conta numero: " +
          numeroOrigem +
          " e /ou a Conta numero: " +
          numeroDestino +
          " não foram encontradas!",
        Colors.reset
      );
  }
  public gerarNumero(): number {
    return ++this.numero;
  }
  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }
    return null;
  }
}
