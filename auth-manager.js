// Gerenciador de Autenticação e Sessão

class AuthManager {
    constructor() {
        this.usuarioAtual = null;
        this.lojaAtual = null;
        this.inicializar();
    }

    // Inicializar o gerenciador
    inicializar() {
        this.restaurarSessao();
    }

    // Fazer login com senha e loja
    login(senha) {
        try {
            // Encontrar a loja pela senha
            const loja = window.encontrarLojaPorSenha(senha);
            
            if (!loja) {
                return {
                    sucesso: false,
                    mensagem: "Senha incorreta! Tente novamente."
                };
            }

            // Armazenar dados da sessão
            const sessao = {
                usuarioAutenticado: true,
                lojaId: loja.id,
                lojaNome: loja.nome,
                lojaIcone: loja.icone,
                lojaCidade: loja.cidade,
                dataLogin: new Date().toISOString(),
                timestamp: Date.now()
            };

            // Salvar no localStorage
            localStorage.setItem('sessaoBK', JSON.stringify(sessao));
            localStorage.setItem('usuarioAutenticado', 'true');
            localStorage.setItem('lojaAtual', JSON.stringify(loja));

            this.usuarioAtual = sessao;
            this.lojaAtual = loja;

            return {
                sucesso: true,
                mensagem: "✓ Acesso concedido! Redirecionando...",
                loja: loja
            };
        } catch (erro) {
            console.error('Erro ao fazer login:', erro);
            return {
                sucesso: false,
                mensagem: "Erro ao processar login. Tente novamente."
            };
        }
    }

    // Fazer logout
    logout() {
        try {
            localStorage.removeItem('sessaoBK');
            localStorage.removeItem('usuarioAutenticado');
            localStorage.removeItem('lojaAtual');
            localStorage.removeItem('dataLogin');

            this.usuarioAtual = null;
            this.lojaAtual = null;

            return {
                sucesso: true,
                mensagem: "Logout realizado com sucesso!"
            };
        } catch (erro) {
            console.error('Erro ao fazer logout:', erro);
            return {
                sucesso: false,
                mensagem: "Erro ao fazer logout."
            };
        }
    }

    // Restaurar sessão do localStorage
    restaurarSessao() {
        try {
            const sessaoJson = localStorage.getItem('sessaoBK');
            const lojaJson = localStorage.getItem('lojaAtual');

            if (sessaoJson && lojaJson) {
                this.usuarioAtual = JSON.parse(sessaoJson);
                this.lojaAtual = JSON.parse(lojaJson);
                return true;
            }
            return false;
        } catch (erro) {
            console.error('Erro ao restaurar sessão:', erro);
            return false;
        }
    }

    // Verificar se o usuário está autenticado
    estaAutenticado() {
        return this.usuarioAtual !== null && this.usuarioAtual.usuarioAutenticado === true;
    }

    // Obter dados da loja atual
    obterLojaAtual() {
        return this.lojaAtual;
    }

    // Obter dados da sessão
    obterSessao() {
        return this.usuarioAtual;
    }

    // Obter nome da loja
    obterNomeLoja() {
        return this.lojaAtual ? this.lojaAtual.nome : null;
    }

    // Obter ícone da loja
    obterIconeLoja() {
        return this.lojaAtual ? this.lojaAtual.icone : null;
    }

    // Obter ID da loja
    obterIdLoja() {
        return this.lojaAtual ? this.lojaAtual.id : null;
    }

    // Verificar se a sessão expirou (opcional - 24 horas)
    sessaoExpirada() {
        if (!this.usuarioAtual) return true;

        const dataLogin = new Date(this.usuarioAtual.dataLogin);
        const agora = new Date();
        const diferencaMs = agora - dataLogin;
        const diferencaHoras = diferencaMs / (1000 * 60 * 60);

        return diferencaHoras > 24;
    }
}

// Criar instância global do gerenciador
const authManager = new AuthManager();

// Exportar para uso global
window.authManager = authManager;
