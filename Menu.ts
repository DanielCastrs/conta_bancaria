import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
  // Instância da Classe ContaController
  let contas: ContaController = new ContaController();
  // Variaveis Auxiliares
  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    aniversario,
    valor,
    numeroDestino: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupanca"];

  // CONTA CORRENTE
  const contaCorrente: ContaCorrente = new ContaCorrente(
    2,
    123,
    1,
    "Maria",
    1500,
    1000
  );
  contaCorrente.visualizar();
  contaCorrente.sacar(2000);
  contaCorrente.visualizar();
  contaCorrente.depositar(1000);
  contaCorrente.visualizar();

  const contapoupanca: ContaPoupanca = new ContaPoupanca(
    3,
    123,
    2,
    "Victor",
    1000,
    10
  );
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {
    console.log(
      Colors.bg.black,
      Colors.fg.red,
      "*****************************************************"
    );
    console.log("                                                     ");
    console.log("                BANCO DO SAMDROANDRÉ                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log(
      "                                                     ",
      Colors.reset
    );

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log(
        Colors.fg.greenstrong,
        "\nBanco do SAMDROANDRÉ - O seu Futuro começa aqui!"
      );
      sobre();
      console.log(Colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\nCriar Contas\n");

        let cc1: ContaCorrente = new ContaCorrente(
          contas.gerarNumero(),
          123,
          1,
          "João da Silva",
          1000,
          100.0
        );
        contas.cadastrar(cc1);

        let cc2: ContaCorrente = new ContaCorrente(
          contas.gerarNumero(),
          124,
          1,
          "Maria da Silva",
          2000,
          100.0
        );
        contas.cadastrar(cc2);

        let cp1: ContaPoupanca = new ContaPoupanca(
          contas.gerarNumero(),
          125,
          2,
          "Mariana dos Santos",
          4000,
          12
        );
        contas.cadastrar(cp1);

        let cp2: ContaPoupanca = new ContaPoupanca(
          contas.gerarNumero(),
          125,
          2,
          "Juliana Ramos",
          8000,
          15
        );
        contas.cadastrar(cp2);

        contas.listarTodas();
      // console.log(Colors.fg.whitestrong, "\n\nCriar Conta\n\n", Colors.reset);
      // console.log("Digite o Número da agência: ");
      // agencia = readlinesync.questionInt("");
      // console.log("Digite o Nome do Titular da conta: ");
      // titular = readlinesync.question("");
      // console.log("\nDigite o tipo da Conta: ");
      // tipo = readlinesync.keyInSelect(tiposContas, "", { cancel: false }) + 1;
      // console.log("\nDigite o Saldo da conta (R$): ");
      // saldo = readlinesync.questionFloat("");

      // switch (tipo) {
      //   case 1:
      //     console.log("Digite o Limite da conta(R$): ");
      //     limite = readlinesync.questionFloat("");
      //     contas.cadastrar(
      //       new ContaCorrente(
      //         contas.gerarNumero(),
      //         agencia,
      //         tipo,
      //         titular,
      //         saldo,
      //         limite
      //       )
      //     );
      //     break;
      //   case 2:
      //     console.log("Digite o Dia do aniversário da Conta Poupança: ");
      //     aniversario = readlinesync.questionInt("");
      //     contas.cadastrar(
      //       new ContaPoupanca(
      //         contas.gerarNumero(),
      //         agencia,
      //         tipo,
      //         titular,
      //         saldo,
      //         aniversario
      //       )
      //     );
      //     break;
      // }
      // keyPress();
      // break;
      case 2:
        console.log(
          Colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          Colors.reset
        );
        contas.listarTodas();
        keyPress();
        break;
      case 3:
        console.log(
          Colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          Colors.reset
        );

        console.log("Digite o número da Conta: ");
        numero = readlinesync.questionInt("");
        contas.procurarPorNumero(numero);

        keyPress();
        break;
      case 4:
        console.log(
          Colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          Colors.reset
        );
        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");
        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log("Digite o numero da agencia: ");
          agencia = readlinesync.questionInt("");
          console.log("Digite o nome do titular da conta: ");
          titular = readlinesync.question("");
          tipo = conta.tipo;
          console.log("\nDigite o Saldo da conta (R$): ");
          saldo = readlinesync.questionFloat("");

          switch (tipo) {
            case 1:
              console.log("Digite o limite da conta (R$)");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;
            case 2:
              console.log("Digite o dia do aniversario da conta poupanca: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(
            Colors.fg.red,
            "\nA conta numero: " + numero + "nao foi encontrada!",
            Colors.reset
          );
        }
        keyPress();
        break;
      case 5:
        console.log(
          Colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          Colors.reset
        );
        console.log("Digite o número da conta: ");
        numero = readlinesync.questionInt("");
        contas.delete(numero);
        keyPress();
        break;
      case 6:
        console.log(Colors.fg.whitestrong, "\n\nSaque\n\n", Colors.reset);
        console.log("Digite o numero da conta: ");
        numero = readlinesync.questionInt("");

        console.log("\nDigite o valor do saque (R$): ");
        valor = readlinesync.questionFloat("");
        contas.sacar(numero, valor);
        keyPress();
        break;
      case 7:
        console.log(Colors.fg.whitestrong, "\n\nDepósito\n\n", Colors.reset);
        console.log("Digite o numero da conta: ");
        numero = readlinesync.questionInt("");
        console.log("\nDigite o valor do deposito (R$): ");
        valor = readlinesync.questionFloat("");
        contas.depositar(numero, valor);
        keyPress();
        break;
      case 8:
        console.log(
          Colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          Colors.reset
        );
        console.log("Digite o numero da conta de origem: ");
        numero = readlinesync.questionInt("");
        console.log("Digite o numero da conta de destino: ");
        numeroDestino = readlinesync.questionInt("");
        console.log("\nDigite o valor do deposito (R$): ");
        valor = readlinesync.questionFloat("");

        contas.transferir(numero, numeroDestino, valor);
        keyPress();
        break;
      default:
        console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);

        keyPress();
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: ");
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/conteudoGeneration");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(Colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
