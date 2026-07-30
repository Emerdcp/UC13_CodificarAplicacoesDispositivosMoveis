# Para rodar Sistema no power Shel

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

'   $env:NODE_TLS_REJECT_UNAUTHORIZED="0"

npx expo start 


Rodar sempre para iniciar a pasta



# Instalação das notificações

Instalar para iniciar um projeto
```sql
npx create-expo-app notificacoes --template blank-typescript@sdk-54
```

Instalar serviços.

```sql
npx expo install expo-notifications expo-device expo-constants
```


npx create-expo-app 2026.07.29_AlarmeNotificacoes --template blank-typescript@sdk-54