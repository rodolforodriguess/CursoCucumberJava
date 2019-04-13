#language: pt
@unitários
Funcionalidade: Aprender Cucumber
Como um aluno
Eu quero aprender a utilizar Cucumber
Para que eu possa automatizar criterios de aceitacao

	Cenario: Deve executar a especificao
Dado criei o arquivo corretamente
Quando executa-lo
Entao especificacao deve finalizar com sucesso

Cenario: Deve incrementar contador
Dado que o valor do contador e 15
Quando eu incrementar em 3
Entao o valor do contador sera 18

@tipo1
Cenario: Deve incrementar contador
Dado que o valor do contador e 123
Quando eu incrementar em 35
Entao o valor do contador sera 158

@tipo2
Cenario: Deve calcular atraso na entrega
Dado que a entrega é dia 05/04/2018
Quando a entrega atrasar em 2 dias
Entao a entrega sera feita dia 07/04/2018

@tipo1 @tipo2
Cenario: Deve calcular atraso na entrega da China
Dado que a entrega é dia 05/04/2018
Quando a entrega atrasar em 2 meses
Entao a entrega sera feita dia 05/06/2018 

Cenário: Deve criar steps genéricos para estes passos
    Dado que o ticket é AF345
    Dado que o valor da passagem é R$ 230,45
    Dado que o nome do passageiro é "Fulano da Silva"
    Dado que o telefone do passageiro é 9999-9999
    Quando criar os steps
    Então o teste vai funcionar

 
Cenário: Deve reaproveitar os steps "Dado" do cenário anterior
    Dado que o ticket é AB167
    Dado que o ticket especial é AB167
    Dado que o valor da passagem é R$ 1120,23
    Dado que o nome do passageiro é "Cicrano de Oliveira" 
    Dado que o telefone do passageiro é 9888-8888

@ignore
Cenário: Deve negar todos os steps "Dado" dos cenários anteriores
    Dado que o ticket é CD123
    Dado que o ticket é AG1234
    Dado que o valor da passagem é R$ 1.1345,56
    Dado que o nome do passageiro é "Beltrano Souza Matos de Alcântara Azevedo"
    Dado que o telefone do passageiro é 1234-5678
    Dado que o telefone do passageiro é 999-2223