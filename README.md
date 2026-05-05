# UC13_CodificarAplicacoesDispositivosMoveis
UC13: Codificar aplicações para dispositivos móveis.


# UC13_CodificarAplicacoesDispositivosMoveis
UC13: Codificar aplicações para dispositivos móveis.

# Iniciando um Projeto

- Selecione a pasta para poder fazer a instalação.

```sql
npx create-expo-app --template
```

- Escolha o nome do projeto.

Onde está *my-app*

- Selecione **Blank (TypeScript)**

![alt text](image.png)

- Configuração para abrir ele no Android

### Acessar a pasta, e rodar o comando rodar o projeto.

```sql
npx expo start
```

- Vamos instalar um emulador https://expo.dev/go para poder rodar o projeto no Andriod.

Selecione a versão do API

![alt text](image-1.png)

- Copiar o link e ir no android.

![alt text](image-2.png)

- Acessa o Google pelo emulador.

![alt text](image-3.png)

- Colar e dar um enter e fazer o downloads.

![alt text](image-4.png)

- Aceitar as funções, verificar porque pode estar aberto em outra APP, precisa minimizar.

### Para rodar depois da configuração, para rodar OFFLINE

```
npx expo start --offline
```
- Depois vamos usar o opção **A** para rodar no android.

![alt text](image-5.png)

# Para configurar as pasta e aparecer raiz.

- Dar um Control + Shift + P.

Digitar "User Settings (JSON)"

- No último linha, colocar virgula e digitar.

![alt text](image-6.png)

"explorer.compactFolders": false,

![alt text](image-7.png)

## Alteração de configuração correto do projeto.

- Precisar criar as pasta scr/app/Home

- Temos que trazer a arquivo da pasta App.tsx para Home.

![alt text](image-8.png)

- Alterar para o App.tsx para Home.tsx

- Dentro da Index, corrigir o caminho.

```sql
export default function Home()
```

