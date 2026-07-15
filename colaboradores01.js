// ========================================
// COLABORADORES.JS - Sistema de Gestão de Escala BK
// Integração Firebase: busca dados do banco da loja selecionada,
// cria automaticamente se não existir, com fallback dos dados padrão.
// Lógica simplificada com operadores ternários.
// ========================================

// ========================================
// CONFIGURAÇÕES DO MÊS ATUAL
// ========================================
function obterConfiguracoesMesAtual() {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);

    const diasSemana = [
        "domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"
    ];

    const nomesMeses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const ano = ping.getFullYear();
    const mes = ping.getMonth();

    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);

    return {
        ano,
        numeroMes: mes + 1,
        nomeMes: nomesMeses[mes],
        mesConfig: [1, diasSemana[primeiroDia.getDay()], ultimoDia.getDate()],
        periodo: `${String(1).padStart(2, '0')}/${String(mes + 1).padStart(2, '0')}/${ano} a ${String(ultimoDia.getDate()).padStart(2, '0')}/${String(mes + 1).padStart(2, '0')}/${ano}`,
        primeiroDiaMes: primeiroDia,
        ultimoDiaMes: ultimoDia,
        totalDias: ultimoDia.getDate(),
        diaSemanaInicial: diasSemana[primeiroDia.getDay()]
    };
}

const configMes = obterConfiguracoesMesAtual();
const mesConfig = configMes.mesConfig;
const periodo = configMes.periodo;

// ========================================
// COLABORADORES E LIDERANÇA PADRÃO
// ========================================
const intermediariosPadrao = [];
const jovensAprendizesPadrao = [];

let colaboradoresPadrao = [
  { nome: 'AISLA HOLLANA CRUZ', turno: '08:00', folgaFixa: 'quinta', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'marco', dia: 25 } },
  { nome: 'ALEFE CHAGAS SILVA', turno: '15:00', folgaFixa: 'quinta', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'abril', dia: 10 } },
  { nome: 'AMAURI SOARES DA ROCHA', turno: '15:00', folgaFixa: 'quarta', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'maio', dia: 12 } },
  { nome: 'BEATRIZ GONÇALVES DA S.', turno: '08:00', folgaFixa: 'quarta', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'janeiro', dia: 22 } },
  { nome: 'CARLOS EDUARDO (EXP.)', turno: '15:00', folgaFixa: 'terça', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'julho', dia: 5 } },
  { nome: 'GRACIENE SILVA DA PAZ', turno: '08:00', folgaFixa: 'sábado', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'fevereiro', dia: 14 } },
  { nome: 'JADISON SILVA ARAUJO', turno: '15:00', folgaFixa: 'segunda', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'junho', dia: 19 } },
  { nome: 'KARLA MAYARA RODRIGUES', turno: '15:00', folgaFixa: 'segunda', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'maio', dia: 3 } },
  { nome: 'LEANDRO ARAUJO DE A.', turno: '08:00', folgaFixa: 'sábado', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'abril', dia: 20 } },
  { nome: 'MARCOS VINICIUS P.', turno: '15:00', folgaFixa: 'terça', domingos: [], descansoExtra: [], ferias: [8, 30], aniversario: { mes: 'julho', dia: 9 } },
  { nome: 'MARIA EDUARDA C.', turno: '15:00', folgaFixa: null, domingos: [7, 14, 21, 28], descansoExtra: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30], ferias: [], aniversario: { mes: 'agosto', dia: 30 } },
  { nome: 'MARIA EDUARDA SILVA M.', turno: '15:00', folgaFixa: 'terça', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'junho', dia: 7 } },
  { nome: 'PALOMA GABRIELA VIANA', turno: '15:00', folgaFixa: 'segunda', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'julho', dia: 23 } },
  { nome: 'PEDRO THAYRO MELO O.', turno: '15:00', folgaFixa: 'quarta', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'marco', dia: 5 } },
  { nome: 'TAYNARA FELIPE DE FARIAS', turno: '15:00', folgaFixa: 'terça', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'maio', dia: 28 } },
  { nome: 'THALYSOM KAIQUE DOS S.', turno: '15:00', folgaFixa: 'quarta', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'agosto', dia: 11 } },
  { nome: 'VICTOR DEIVID BORGES S.', turno: '08:00', folgaFixa: 'segunda', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'fevereiro', dia: 8 } },
  { nome: 'WANDERSON ALVES P.', turno: '08:00', folgaFixa: 'sexta', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'janeiro', dia: 15 } },
  { nome: 'WEBERSON HENRIQUE D.', turno: '15:00', folgaFixa: 'sexta', domingos: [], descansoExtra: [], ferias: [], aniversario: { mes: 'marco', dia: 18 } },
];

let liderancaPadrao = [
  { nome: 'THIAGO DE SOUZA', cargo: 'Gerente', turno: 'I', folga: 'terça', folgasExtras: [], folgaDominical: [] },
  { nome: 'VANESSA', cargo: 'Coordenadora', turno: '08:00-16:20', folga: 'quarta', folgasExtras: [], folgaDominical: [] },
  { nome: 'RAYRA', cargo: 'Coordenadora', turno: '15:00-23:20', folga: 'quinta', folgasExtras: [], folgaDominical: [] }
];

// ========================================
// HELPERS DE DATA
// ========================================
function obterNomeMesAtual() {
    const nomesMeses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    return nomesMeses[new Date().getMonth()];
}

function gerarPeriodoAutomatico(mesConfig) {
    const mapaMesParaNumero = {
        "janeiro": 0, "fevereiro": 1, "março": 2, "abril": 3,
        "maio": 4, "junho": 5, "julho": 6, "agosto": 7,
        "setembro": 8, "outubro": 9, "novembro": 10, "dezembro": 11
    };
    const diaInicial = mesConfig[0];
    const ultimoDia = mesConfig[2];
    const nomeMes = obterNomeMesAtual();
    const mesNum = mapaMesParaNumero[nomeMes];
    const ano = new Date().getFullYear();

    return mesNum !== undefined
        ? (() => {
            const fmt = d => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
            return `${fmt(new Date(ano, mesNum, diaInicial))} a ${fmt(new Date(ano, mesNum, ultimoDia))}`;
        })()
        : `${String(diaInicial).padStart(2, '0')}/??/???? a ${String(ultimoDia).padStart(2, '0')}/??/????`;
}

// ========================================
// ESTADO GLOBAL
// ========================================
window.dadosEscala = {
    intermediarios: [...intermediariosPadrao],
    jovensAprendizes: [...jovensAprendizesPadrao],
    colaboradores: JSON.parse(JSON.stringify(colaboradoresPadrao)),
    lideranca: JSON.parse(JSON.stringify(liderancaPadrao)),
    dadosCarregados: false,
    origemDados: 'padrao'
};

// ========================================
// HELPERS DE LOJA / FIREBASE
// ========================================
function obterColecaoLoja() {
    const idLoja = window.authManager?.obterIdLoja?.() ?? null;
    return idLoja ? `escalas_loja_${idLoja}` : 'escalas_geral';
}

 function obterIdLoja() {
 return window.authManager?.obterIdLoja?.() ?? null;
}
//ID criado
// ========================================
// CARREGAR DADOS DO FIRESTORE DA LOJA
// ========================================
async function carregarDadosFirebase() {

    const idLoja = obterIdLoja();
    const nomeMes = obterNomeMesAtual();
    const docId = `${nomeMes}_${new Date().getFullYear()}`;
    const colecao = obterColecaoLoja();

    if (!window.firebaseDb) {
        console.log('[Colaboradores.js] Firebase indisponível, usando dados padrão.');
        return null;
    }

    try {
        const { doc, getDoc, getFirestore } = await import('https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js');
        const firestore = getFirestore();
        const docSnap = await getDoc(doc(firestore, colecao, docId));

        return docSnap.exists()
            ? {
                mesConfig: docSnap.data().mesConfig ?? null,
                periodo: docSnap.data().periodo ?? null,
                intermediarios: docSnap.data().intermediarios ?? null,
                jovensAprendizes: docSnap.data().jovensAprendizes ?? null,
                colaboradores: docSnap.data().colaboradores ?? null,
                lideranca: docSnap.data().lideranca ?? null,
                origem: 'firebase'
            }
            : {
                mesConfig: null, periodo: null,
                intermediarios: null, jovensAprendizes: null,
                colaboradores: null, lideranca: null,
                origem: 'padrao_para_criar'
            };
    } catch (erro) {
        console.error('[Colaboradores.js] Erro ao carregar do Firebase:', erro);
        return null;
    }
}

// ========================================
// CRIAR DADOS INICIAIS NO FIRESTORE
// ========================================
async function criarDadosLojaFirestore() {
    const idLoja = obterIdLoja();
    const nomeMes = obterNomeMesAtual();
    const dataAtual = new Date();
    const docId = `${nomeMes}_${dataAtual.getFullYear()}`;
    const colecao = obterColecaoLoja();
    const periodoGerado = gerarPeriodoAutomatico(mesConfig);

    if (!window.firebaseDb) {
        console.log('[Colaboradores.js] Firebase indisponível para criação.');
        return false;
    }

    try {
        const { doc, setDoc, getFirestore, Timestamp } = await import('https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js');
        const firestore = getFirestore();

        await setDoc(doc(firestore, colecao, docId), {
            mesConfig,
            periodo: periodoGerado,
            intermediarios: intermediariosPadrao,
            jovensAprendizes: jovensAprendizesPadrao,
            colaboradores: colaboradoresPadrao,
            lideranca: liderancaPadrao,
            ultimaAtualizacao: Timestamp.fromDate(dataAtual),
            lojaId: idLoja ?? 'geral',
            criadoEm: Timestamp.fromDate(dataAtual)
        });

        console.log(`[Colaboradores.js] Dados criados com sucesso na coleção ${colecao}/${docId}`);
        return true;
    } catch (erro) {
        console.error('[Colaboradores.js] Erro ao criar dados no Firebase:', erro);
        return false;
    }
}

// ========================================
// INICIALIZAÇÃO PRINCIPAL
// ========================================
async function inicializarDadosEscala() {
    const idLoja = obterIdLoja();
    console.log(`[Colaboradores.js] Inicializando dados para loja ID: ${idLoja}`);

    const resultado = await carregarDadosFirebase();
    const periodoGerado = gerarPeriodoAutomatico(mesConfig);

    // Monta o objeto de dados com base na origem
    window.dadosEscala = resultado
        ? resultado.origem === 'firebase'
            ? {
                mesConfig: resultado.mesConfig ?? mesConfig,
                periodo: resultado.periodo ?? periodoGerado,
                intermediarios: resultado.intermediarios ? [...resultado.intermediarios] : [...intermediariosPadrao],
                jovensAprendizes: resultado.jovensAprendizes ? [...resultado.jovensAprendizes] : [...jovensAprendizesPadrao],
                colaboradores: resultado.colaboradores ? JSON.parse(JSON.stringify(resultado.colaboradores)) : JSON.parse(JSON.stringify(colaboradoresPadrao)),
                lideranca: resultado.lideranca ? JSON.parse(JSON.stringify(resultado.lideranca)) : JSON.parse(JSON.stringify(liderancaPadrao)),
                dadosCarregados: true,
                origemDados: 'firebase'
            }
            : resultado.origem === 'padrao_para_criar'
                ? (() => {
                    const dados = {
                        intermediarios: [...intermediariosPadrao],
                        jovensAprendizes: [...jovensAprendizesPadrao],
                        colaboradores: JSON.parse(JSON.stringify(colaboradoresPadrao)),
                        lideranca: JSON.parse(JSON.stringify(liderancaPadrao)),
                        dadosCarregados: true,
                        origemDados: 'padrao_criado'
                    };
                    console.log('[Colaboradores.js] Usando dados padrão (fallback). Tentando criar no Firebase...');
                    criarDadosLojaFirestore();
                    return dados;
                })()
                : (() => {
                    
                    return {
                        intermediarios: [...intermediariosPadrao],
                        jovensAprendizes: [...jovensAprendizesPadrao],
                        colaboradores: JSON.parse(JSON.stringify(colaboradoresPadrao)),
                        lideranca: JSON.parse(JSON.stringify(liderancaPadrao)),
                        dadosCarregados: true,
                        origemDados: 'local'
                    };
                })()
        : (() => {
            
            return {
                intermediarios: [...intermediariosPadrao],
                jovensAprendizes: [...jovensAprendizesPadrao],
                colaboradores: JSON.parse(JSON.stringify(colaboradoresPadrao)),
                lideranca: JSON.parse(JSON.stringify(liderancaPadrao)),
                dadosCarregados: true,
                origemDados: 'local'
            };
        })();

    // Disponibilizar variáveis globais compatíveis com editor_escalas.html
    window.intermediarios = window.dadosEscala.intermediarios;
    window.jovensAprendizes = window.dadosEscala.jovensAprendizes;
    window.colaboradores = window.dadosEscala.colaboradores;
    window.lideranca = window.dadosEscala.lideranca;
    window.mesConfig = mesConfig;
    window.colaboradoresPadrao = colaboradoresPadrao;
    window.liderancaPadrao = liderancaPadrao;
    window.intermediariosPadrao = intermediariosPadrao;
    window.jovensAprendizesPadrao = jovensAprendizesPadrao;

    console.log('[Colaboradores.js] Inicialização concluída.');
    window.dispatchEvent(new CustomEvent('dadosEscalaProntos'));
}

inicializarDadosEscala();

// ========================================
// PROCESSAR DADOS (RELATÓRIO)
// ========================================
function processarDados() {
    const dados = window.dadosEscala;

    const counts = dados.colaboradores.reduce((acc, colab) => {
        const isJovem = dados.jovensAprendizes.some(j => colab.nome.includes(j));
        if (isJovem) { acc.jovem++; return acc; }

        const isIntermediario = dados.intermediarios.some(inter => colab.nome.includes(inter));
        if (isIntermediario) { acc.intermediario++; return acc; }

        acc.manha += colab.turno === '08:00' ? 1 : 0;
        acc.tarde += colab.turno === '15:00' ? 1 : 0;
        acc.noite += colab.turno === '22:00' ? 1 : 0;
        return acc;
    }, { manha: 0, tarde: 0, intermediario: 0, noite: 0, jovem: dados.jovensAprendizes.length });

    return {
        periodo: dados.periodo,
        counts,
        total: counts.manha + counts.tarde + counts.intermediario + counts.noite + counts.jovem
    };
}

const relatorioConfig = processarDados();

// ========================================
// METAS DE VENDAS E COBERTURA
// ========================================
const metasLunch = {
    'segunda': 5, 'terça': 5, 'quarta': 5, 'quinta': 6,
    'sexta': 7, 'sábado': 7, 'domingo': 5
};

const metasDinner = {
    'segunda': 11, 'terça': 12, 'quarta': 12, 'quinta': 12,
    'sexta': 13, 'sábado': 15, 'domingo': 11
};

// ========================================
// FUNCIONÁRIOS DO MÊS
// ========================================
const historicoFuncionariosMes = {
    'janeiro': { nome: 'WANDERSON ALVES P.', motivo: 'Liderança exemplar e dedicação ao treinamento' },
    'fevereiro': { nome: 'VICTOR DEIVID BORGES S.', motivo: 'Excelente desempenho operacional e colaboração' },
    'março': { nome: 'BEATRIZ GONÇALVES DA S.', motivo: 'Dedicação ao cliente e organização impecável' },
    'abril': { nome: 'PEDRO THAYRO MELO O.', motivo: 'Profissionalismo e contribuição significativa' },
    'maio': { nome: 'GRACIENE SILVA DA PAZ', motivo: 'Excelência no atendimento e paciência com clientes' },
    'junho': { nome: 'WEBERSON HENRIQUE D.', motivo: 'Desempenho excepcional e liderança na equipe' }
};