# Integração Firebase - Sistema de Gestão de Escala BK

## 📋 Resumo das Alterações (Atualização de Senhas)

O sistema foi atualizado para que cada loja possua uma **senha exclusiva e segura**. O arquivo `logins.js` foi sincronizado com a configuração do Firebase em `firebase-config.js`.

## 🏪 Lojas e Senhas Exclusivas

| ID | Nome da Loja | Senha Exclusiva | Ícone |
|----|--------------|-----------------|-------|
| 1 | Águas Claras Shopping | `ACS@2024BK#Escala` | águasclarasshopping.png |
| 2 | Águas Lindas Shopping | `ALS@2024BK#Escala` | águaslindasshopping.png |
| 3 | FS Águas Claras - Castanheiras | `FSAC@2024BK#Escala` | fs_df_águasclaras_castanheiras.png |
| 4 | FS Taguatinga - Setor A Sul | `FSTA@2024BK#Escala` | fs_taguatinga_setor_a_sul.png |
| 5 | JK Shopping | `JKS@2024BK#Escala` | jkshopping.png |
| 6 | Metrópole Shopping | `MPS@2024BK#Escala` | metrópoleshopping.png |
| 7 | Shopping Conjunto Nacional | `SCN@2024BK#Escala` | shoppingconjuntonacional.png |
| 8 | Taguatinga Shopping | `TS@2024BK#Escala` | taguatingashopping.png |

## 🔧 Arquivos Atualizados

1. **firebase-config.js**
   - Atualizado com as novas senhas complexas para cada loja.

2. **logins.js**
   - Atualizado para incluir apenas as novas senhas válidas.
   - Adicionado mapeamento de referência entre senha e loja.

3. **README_FIREBASE_INTEGRACAO.md** (este arquivo)
   - Tabela de senhas atualizada.

## 🔐 Segurança

- Cada loja agora tem uma credencial única.
- O sistema de login valida se a senha digitada pertence à loja selecionada na tela inicial.
- As senhas seguem um padrão de segurança (SiglaLoja + @2024BK#Escala).

## 🚀 Como Usar

1. Acesse `index.html`.
2. Clique no ícone da sua loja específica.
3. Digite a senha correspondente à sua loja (veja a tabela acima).
4. O portal carregará automaticamente os dados e o ícone da sua unidade no header.

---

**Última atualização:** 10 de julho de 2026
**Versão:** 1.1
