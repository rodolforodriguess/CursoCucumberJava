$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cadastro_Contas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "bicycle",
        "Conta adicionada com sucesso!"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 27,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 637885,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"bike@kona.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"kona\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 6800458755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bike@kona.com",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informo_o_usuário(String)"
});
formatter.result({
  "duration": 472868383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kona",
      "offset": 9
    }
  ],
  "location": "InserirContaSteps.a_senha(String)"
});
formatter.result({
  "duration": 252434206,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 793570727,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizo_a_página_inicial()"
});
formatter.result({
  "duration": 105563774,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 143525504,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 424790060,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"bicycle\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "bicycle",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 168100468,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 636166203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 75873389,
  "status": "passed"
});
formatter.after({
  "duration": 662585708,
  "status": "passed"
});
formatter.after({
  "duration": 1114567154,
  "status": "passed"
});
formatter.before({
  "duration": 165730,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"bike@kona.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"kona\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 6390646824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bike@kona.com",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informo_o_usuário(String)"
});
formatter.result({
  "duration": 565810571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kona",
      "offset": 9
    }
  ],
  "location": "InserirContaSteps.a_senha(String)"
});
formatter.result({
  "duration": 329794935,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 1470936393,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizo_a_página_inicial()"
});
formatter.result({
  "duration": 171577981,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 248693993,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 775882381,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 224116561,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 527836851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 119551048,
  "status": "passed"
});
formatter.after({
  "duration": 868543179,
  "status": "passed"
});
formatter.after({
  "duration": 1251538911,
  "status": "passed"
});
formatter.before({
  "duration": 167846,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"bike@kona.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"kona\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 5934287986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bike@kona.com",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informo_o_usuário(String)"
});
formatter.result({
  "duration": 562979758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kona",
      "offset": 9
    }
  ],
  "location": "InserirContaSteps.a_senha(String)"
});
formatter.result({
  "duration": 344052666,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 1250172518,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizo_a_página_inicial()"
});
formatter.result({
  "duration": 163917368,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 192168720,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 519629329,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 224211768,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 417344545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 120207268,
  "status": "passed"
});
formatter.after({
  "duration": 506384667,
  "status": "passed"
});
formatter.after({
  "duration": 871964272,
  "status": "passed"
});
});