import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
  let opcao: number;

  // Objeto da Classe Conta (Teste)

  let num1: number = 1;
  let num2: number = 123;
  let num3: number = 1;
  let nome: string = "Adriana";
  let num4: number = 10000;
  const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
  conta.visualizar();
  conta.sacar(10500);
  conta.visualizar();
  conta.depositar(5000);
  conta.visualizar();
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
        console.log(Colors.fg.whitestrong, "\n\nCriar Conta\n\n", Colors.reset);
        conta.visualizar();
        keyPress();
        break;
      case 2:
        console.log(
          Colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          Colors.reset
        );

        keyPress();
        break;
      case 3:
        console.log(
          Colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          Colors.reset
        );

        keyPress();
        break;
      case 4:
        console.log(
          Colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          Colors.reset
        );

        keyPress();
        break;
      case 5:
        console.log(
          Colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          Colors.reset
        );

        keyPress();
        break;
      case 6:
        console.log(Colors.fg.whitestrong, "\n\nSaque\n\n", Colors.reset);

        keyPress();
        break;
      case 7:
        console.log(Colors.fg.whitestrong, "\n\nDepósito\n\n", Colors.reset);

        keyPress();
        break;
      case 8:
        console.log(
          Colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          Colors.reset
        );

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
