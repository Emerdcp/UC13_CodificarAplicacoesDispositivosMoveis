# Criar APK pelo Expo Server

Olá pessoa da sala, vamos preparar o ambiente para criar nosso APK!

- Criar conta no Expo
- Configurar o projeto usando terminal
- Configurar arquivos jerados no projeto
- Enviar projeto para o Expo Server

## Criar conta no Expo

- Acesse o site da [expo.dev](https://expo.dev/).
- Crie uma conta nova "usar github recomendado"
- **lembre-se bem do username**

## Logar no terminal

Como estamos na rede do Senac lembre-se bem de usar sempre o comando para liberar a rede do Senac:

```bash
$env:NODE_TLS_REJECT_UNAUTHORIZED="0"
```

Logar no Expo:

```bash
npx eas-cli login
```

Caso queira mudar de conta é só fazer logout

```bash
npx eas-cli logout
```

Vai abrir uma janela no navegador para selecionar a conta que deseja logar, após selecionar a conta vai redirecionar para uma página de sucesso, é só fechar e voltar para o terminal, e lá deve estar escrito `Logged in`.

![alt text](img/01.png)

![alt text](img/02.png)

## Configurar projeto

Agora vamos criar o arquivo de configuração com o comando:

- *obs: caso não tenha criado um repositório GIT ele vai pedir para iniciar um, é só confirmar com "Y"*

- *obs2: pode ser que tenha que informar o usuario e email do GitHub*

![alt text](img/03.png)

```bash
npx eas-cli build:configure
```

Ele vai perguntar se quer configurar um projeto novo EAS, confirme "Y":

![alt text](img/04.png)

Após enter vai pedir para selecionar o OS móvel, selecione Android:

![alt text](img/05.png)


Após isso sera criado um arquivo chamado `eas.json` na raiz do projeto, vamos editar ele, precisamos adicionar *android buildType apk nele, ficando assim:

```json
{
  "cli": {
    "version": ">= 21.4.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

## Enviar para o Expo Server gerar APK

Após logar no expo, criar arquivo de configuração e editar o mesmo configurando o android buildtype apk vamos enviar nosso projeto para o expo gerar a APK:

```bash
npx eas-cli build -p android --profile preview
```

Ele vai pedir para criar uma id de aplicação do android, só dar enter e usar o padrão:

![alt text](img/06.png)

Ele **pode** pedir para confirmar que estara usando as credenciais do Expo, confirme "Y":

![alt text](img/07.png)

## Baixar o APK

Após processar o APK o terminal vai dar a URL para a página onde podemos baixar o APK, e vai perguntar se quer instalar o apk no emulador, nege a instalação do emulador "Y" e copie o link:

![alt text](img/08.png)

Na página que abrir você ter as opções Install, Open wi... e os três pontos, clique nele e baixe o APK, ou salve o link do download para baixar direto pelo telefone.

![alt text](img/09.png)

## Atenção!

Como você não esta baixando pela PlayStore, o celular vai dar vários alertas de segurança pelo APK ser desconhecida, mas como você criou o código do APK, é só ignorar os alertas e instalar!