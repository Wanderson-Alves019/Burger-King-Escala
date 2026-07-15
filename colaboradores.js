// ========================================
// CONFIGURAÇÃO BASE (PADRÕES)
// =// ========================================

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

const intermediariosPadrao = ["BEATRIZ GONÇALVES", "WANDERSON ALVES", "GRACIENE SILVA", "WEBERSON HENRIQUE"];
const jovensAprendizesPadrao = ["PEDRO THAYRO", "VICTOR DEIVID"];
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
  { nome: 'THIAGO DE SOUZA', cargo: 'Gerente', turno: 'I', folga: 'terça', folgasExtras: [], folgaDominical: [], ferias: [], aniversario: { mes: 'setembro', dia: 15 } },
  { nome: 'VANESSA', cargo: 'Coordenadora', turno: '08:00-16:20', folga: 'quarta', folgasExtras: [], folgaDominical: [], ferias: [], aniversario: { mes: 'outubro', dia: 22 } },
  { nome: 'RAYRA', cargo: 'Coordenadora', turno: '15:00-23:20', folga: 'quinta', folgasExtras: [], folgaDominical: [], ferias: [], aniversario: { mes: 'novembro', dia: 5 } }
];

var metasLunchPadrao = { 'segunda': 100, 'terça': 5, 'quarta': 5, 'quinta': 6, 'sexta': 7, 'sábado': 7, 'domingo': 5 };
var metasDinnerPadrao = { 'segunda': 11, 'terça': 12, 'quarta': 12, 'quinta': 12, 'sexta': 13, 'sábado': 15, 'domingo': 11 };
const historicoFuncionariosMesPadrao = {
    'janeiro': { nome: 'WANDERSON ALVES P.', motivo: 'Liderança exemplar e dedicação ao treinamento' },
    'fevereiro': { nome: 'VICTOR DEIVID BORGES S.', motivo: 'Excelente desempenho operacional e colaboração' },
    'março': { nome: 'BEATRIZ GONÇALVES DA S.', motivo: 'Dedicação ao cliente e organização impecável' },
    'abril': { nome: 'PEDRO THAYRO MELO O.', motivo: 'Profissionalismo e contribuição significativa' },
    'maio': { nome: 'GRACIENE SILVA DA PAZ', motivo: 'Excelência no atendimento e paciência com clientes' },
    'junho': { nome: 'WEBERSON HENRIQUE D.', motivo: 'Desempenho excepcional e liderança na equipe' }
};

// ========================================
// HELPERS DE DATA
// ========================================
function obterNomeMesAtual() {
    const nomesMeses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return nomesMeses[new Date().getMonth()];
}

function gerarPeriodoAutomatico(config) {
    const mapaMesParaNumero = { "janeiro": 0, "fevereiro": 1, "março": 2, "abril": 3, "maio": 4, "junho": 5, "julho": 6, "agosto": 7, "setembro": 8, "outubro": 9, "novembro": 10, "dezembro": 11 };
    const nomeMes = obterNomeMesAtual();
    const [diaInicial, , ultimoDia] = config;
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
// ESTADO GLOBAL INICIAL
// ========================================
window.dadosEscala = {
    intermediarios: [...intermediariosPadrao],
    jovensAprendizes: [...jovensAprendizesPadrao],
    colaboradores: JSON.parse(JSON.stringify(colaboradoresPadrao)),
    lideranca: JSON.parse(JSON.stringify(liderancaPadrao)),
    metasLunch: { ...metasLunchPadrao },
    metasDinner: { ...metasDinnerPadrao },
    historicoFuncionariosMes: { ...historicoFuncionariosMesPadrao },
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

async function carregarDadosFirebase() {
    const nomeMes = obterNomeMesAtual();
    const docId = `${nomeMes}_${new Date().getFullYear()}`;
    const colecao = obterColecaoLoja();

    if (!window.firebaseDb) return null;

    try {
        const { doc, getDoc, getFirestore } = await import('https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js');
        const firestore = getFirestore();
        const docSnap = await getDoc(doc(firestore, colecao, docId));

        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                mesConfig: data.mesConfig ?? null,
                periodo: data.periodo ?? null,
                intermediarios: data.intermediarios ?? null,
                jovensAprendizes: data.jovensAprendizes ?? null,
                colaboradores: data.colaboradores ?? null,
                lideranca: data.lideranca ?? null,
                metasLunch: data.metasLunch ?? null,
                metasDinner: data.metasDinner ?? null,
                historicoFuncionariosMes: data.historicoFuncionariosMes ?? null,
                origem: 'firebase'
            };
        }
        return { origem: 'padrao_para_criar' };
    } catch (erro) {
        console.error('[Colaboradores.js] Erro ao carregar do Firebase:', erro);
        return null;
    }
}

async function criarDadosLojaFirestore() {
    const nomeMes = obterNomeMesAtual();
    const docId = `${nomeMes}_${new Date().getFullYear()}`;
    const colecao = obterColecaoLoja();
    const periodoGerado = gerarPeriodoAutomatico(mesConfig);

    if (!window.firebaseDb) return false;

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
            metasLunch: metasLunchPadrao,
            metasDinner: metasDinnerPadrao,
            historicoFuncionariosMes: historicoFuncionariosMesPadrao,
            ultimaAtualizacao: Timestamp.now()
        });
        return true;
    } catch (erro) {
        console.error('[Colaboradores.js] Erro ao criar no Firebase:', erro);
        return false;
    }
}

async function inicializarDadosEscala() {
    const idLoja = obterIdLoja();
    const resultado = await carregarDadosFirebase();
    const periodoGerado = gerarPeriodoAutomatico(mesConfig);

    if (resultado && resultado.origem === 'firebase') {
        window.dadosEscala = {
            mesConfig: resultado.mesConfig ?? mesConfig,
            periodo: resultado.periodo ?? periodoGerado,
            intermediarios: resultado.intermediarios ?? [...intermediariosPadrao],
            jovensAprendizes: resultado.jovensAprendizes ?? [...jovensAprendizesPadrao],
            colaboradores: resultado.colaboradores ?? JSON.parse(JSON.stringify(colaboradoresPadrao)),
            lideranca: resultado.lideranca ?? JSON.parse(JSON.stringify(liderancaPadrao)),
            metasLunch: resultado.metasLunch ?? { ...metasLunchPadrao },
            metasDinner: resultado.metasDinner ?? { ...metasDinnerPadrao },
            historicoFuncionariosMes: resultado.historicoFuncionariosMes ?? { ...historicoFuncionariosMesPadrao },
            dadosCarregados: true,
            origemDados: 'firebase'
        };
    } else if (resultado && resultado.origem === 'padrao_para_criar') {
        window.dadosEscala.dadosCarregados = true;
        window.dadosEscala.origemDados = 'padrao_criado';
        criarDadosLojaFirestore();
    } else {
        window.dadosEscala.dadosCarregados = true;
        window.dadosEscala.origemDados = 'local';
    }

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
    window.metasDinner = resultado.metasDinner
    window.metasLunch = resultado.metasLunch
    console.log('[Colaboradores.js] Inicialização concluída.');
  //  console.log(resultado.metasDinner)
    window.dispatchEvent(new CustomEvent('dadosEscalaProntos'));
}

inicializarDadosEscala();

// ========================================
// PROCESSAR DADOS (RELATÓRIO)
// ========================================
function processarDados() {
    const dados = window.dadosEscala;
    if (!dados.colaboradores) return { total: 0, counts: { manha: 0, tarde: 0, noite: 0, intermediario: 0, jovem: 0 } };

    const counts = dados.colaboradores.reduce((acc, colab) => {
        const isJovem = (dados.jovensAprendizes || []).some(j => colab.nome.includes(j));
        if (isJovem) { acc.jovem++; return acc; }

        const isInter = (dados.intermediarios || []).some(inter => colab.nome.includes(inter));
        if (isInter) { acc.intermediario++; return acc; }

        acc.manha += colab.turno === '08:00' ? 1 : 0;
        acc.tarde += colab.turno === '15:00' ? 1 : 0;
        acc.noite += colab.turno === '22:00' ? 1 : 0;
        return acc;
    }, { manha: 0, tarde: 0, intermediario: 0, noite: 0, jovem: (dados.jovensAprendizes || []).length });

    return {
        periodo: dados.periodo,
        counts,
        total: counts.manha + counts.tarde + counts.intermediario + counts.noite + counts.jovem
    };
}
