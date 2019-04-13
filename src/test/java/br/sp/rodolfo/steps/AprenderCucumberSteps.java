package br.sp.rodolfo.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import org.junit.Assert;

import br.sp.rodolfo.converters.DateConverter;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;


public class AprenderCucumberSteps {
		//public void criei_o_arquivo_corretamente() throws Throwable {
	
	@Dado("^criei o arquivo corretamente$")
	public void crieiOArquivoCorretamente() throws Throwable {
		System.out.println("qualquer coisa");
	    // Write code here that turns the phrase above into concrete actions
	
	}

	@Quando("^executa-lo$")
	public void executaLo() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

	}

	@Entao("^especificacao deve finalizar com sucesso$")
	public void especificacaoDeveFinalizarComSucesso() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  }
	
	@Entao("^outro passo qualquer$")
	public void outroPassoQualquer() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 
	}
	
	
    private int contador = 0;
    
	@Dado("^que o valor do contador e (\\d+)$")
	public void queOValorDoContadorE(int arg1) throws Throwable {
	    contador = arg1;
	    
	}

	@Quando("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int arg1) throws Throwable {
		contador = contador + arg1;

	}

	@Entao("^o valor do contador sera (\\d+)$")
	public void oValorDoContadorSera(int arg1) throws Throwable {
	   Assert.assertEquals(arg1, contador);
	    
	}
	
	Date entrega = new Date();
	
	@Dado("^que a entrega é dia (.*)$")
	public void queAEntregaÉDia(@Transform(DateConverter.class)Date data) throws Throwable {
	    entrega = data;
	    System.out.println(entrega);
	}

	@Quando("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarEmDias(int arg1, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, arg1);
		}
		if(tempo.equals("meses")){
			cal.add(Calendar.MONTH, arg1);			
		}
		entrega = cal.getTime();
				
	}

	@Entao("^a entrega sera feita dia (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeraFeitaDia(String Data) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(Data, dataFormatada);	
		

	}
	@Dado("^que o ticket( especial)? é A(.\\d{3})$")
	public void que_o_ticket_é_AF(String tipo, String arg1) throws Throwable {
	}

	@Dado("^que o valor da passagem é R\\$ (.*)$")
	public void que_o_valor_da_passagem_é_R$(Double numero) throws Throwable {
		System.out.println(numero);
	}

	@Dado("^que o nome do passageiro é \"(.{5,20})\"$")
	public void que_o_nome_do_passageiro_é(String arg1) throws Throwable {

	}

	@Dado("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
	public void que_o_telefone_do_passageiro_é(String telefone) throws Throwable {

	}

	@Quando("^criar os steps$")
	public void criar_os_steps() throws Throwable {

	}

	@Entao("^o teste vai funcionar$")
	public void o_teste_vai_funcionar() throws Throwable {
	
	}
}

