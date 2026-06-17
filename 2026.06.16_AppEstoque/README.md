# para o tipo de navegação expo router

## Fazer instalção padrão

## Para sempre podemos usar durante as aula é preciso sempre ‘ativar’ o terminal para trabalhar então rode no começo da aula sempre

```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED="0"
```

## rodar comando

```sql
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

## No arquivo Packge.json

Altera a Main no arquivo
```json
"main": "expo-router/entry",
```

## No arquivo App.json

Altera a Main no arquivo colocar o sherman
```json
    "slug": "2026.05.27_boxCoin",
    "scheme": "BoxCoin",
```

## Lembrando de arrumar Tsconfig.json

Colocar o paths
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

## Para fazer instalação de fonte.

Instala fonte.
```expo
npx expo install expo-font @expo-google-fonts/inter
```

```expo
npx expo install expo-font @expo-google-fonts/inter -- --legacy-peer-deps
```

## Para fazer instalação para um gradiente

Para fazer instalação da cor gradiente
```expo
npx expo install expo-linear-gradient
```

## Para fazer instalação do Icons

Para instalar e usar os icones no APP
```expo
npx expo install @expo/vector-icons -- --legacy-peer-deps
```

## Instalação

Para instalar
```expo
npm install react-native-currency-input -- --legacy-peer-deps
```


## Para fazer instalação do SQLite para usar banco de dados

Para instalar do SQLite para usar banco de dados
```expo
npx expo install expo-sqlite@15.2.10 -- --legacy-peer-deps
```
