package br.com.dio.DesafioDoBancoDigital;

public class main {
   public static void main(String[] args) {
      Cliente fulano = new Cliente();
      fulano.setNome("fulano");

      Conta cc = new ContaCorrente(fulano);
      Conta poupanca = new ContaPoupanca(fulano);

      cc.depositar(1000);
      cc.transferir(500, poupanca);

      cc.imprimirExtrato();
      poupanca.imprimirExtrato();
   }
}
