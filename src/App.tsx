import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Code2, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Globe, 
  Smartphone, 
  Mail, 
  CheckCircle2, 
  HelpCircle, 
  Lock, 
  Layers, 
  Eye, 
  Terminal, 
  Gamepad2,
  Scale,
  MessageCircleQuestion,
  ArrowUpRight,
  Sparkles,
  WifiOff,
  Flame,
  UserCheck
} from 'lucide-react';
import { AppLogo } from './components/AppLogo.tsx';

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [activeTab, setActiveTab] = useState<'policy' | 'terms' | 'faq' | 'developer'>('policy');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const appData = {
    name: 'Mini Game: Brick offline',
    packageName: 'com.aistudio.brickgame.kyxrtww',
    email: 'gabriel77gregorio@gmail.com',
    developer: 'Gabriel Gregório',
    admobLine: 'google.com, pub-7200374850131746, DIRECT, f08c47fec0942fa0',
    pubId: 'pub-7200374850131746',
    lastUpdatedPT: '29 de setembro de 2026',
    lastUpdatedEN: 'September 29, 2026',
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const downloadFile = (filename: string, content: string, type: string = 'text/plain;charset=utf-8') => {
    const element = document.createElement('a');
    const file = new Blob([content], { type });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Standalone HTML template with retro red branding for GitHub Pages
  const standaloneHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Política de Privacidade — ${appData.name}</title>
  <meta name="description" content="Política de Privacidade oficial do jogo Android ${appData.name} (${appData.packageName})." />
  <meta name="robots" content="index, follow" />
  <style>
    :root {
      --bg: #0d1117;
      --card: #161b22;
      --card-inner: #0d1117;
      --text: #f0f6fc;
      --muted: #8b949e;
      --border: #30363d;
      --red-primary: #dc2626;
      --red-hover: #ef4444;
      --red-soft: rgba(220, 38, 38, 0.15);
      --gold-accent: #fbbf24;
      --lcd-green: #8da88a;
    }
    @media (prefers-color-scheme: light) {
      :root {
        --bg: #fafaf9;
        --card: #ffffff;
        --card-inner: #f5f5f4;
        --text: #1c1917;
        --muted: #78716c;
        --border: #e7e5e4;
        --red-primary: #dc2626;
        --red-hover: #b91c1c;
        --red-soft: #fee2e2;
      }
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: var(--bg); color: var(--text); line-height: 1.7; padding: 40px 16px; }
    .container { max-width: 860px; margin: 0 auto; background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 40px 32px; box-shadow: 0 16px 40px rgba(0,0,0,0.25); }
    .header-box { display: flex; align-items: center; gap: 20px; border-bottom: 1px solid var(--border); padding-bottom: 24px; margin-bottom: 28px; }
    .logo-box { width: 72px; height: 72px; flex-shrink: 0; }
    h1 { font-size: 26px; font-weight: 800; line-height: 1.25; color: var(--text); }
    .badge { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: var(--red-soft); color: var(--red-primary); border: 1px solid rgba(220, 38, 38, 0.3); padding: 4px 10px; border-radius: 6px; margin-bottom: 8px; }
    .meta { font-size: 13px; color: var(--muted); margin-top: 6px; }
    h2 { font-size: 19px; font-weight: 700; margin: 32px 0 12px 0; border-bottom: 1px solid var(--border); padding-bottom: 6px; color: var(--text); }
    h3 { font-size: 15px; font-weight: 600; margin: 20px 0 8px 0; color: var(--text); }
    p { margin-bottom: 14px; font-size: 15px; }
    ul, ol { margin-bottom: 16px; padding-left: 24px; }
    li { margin-bottom: 6px; font-size: 15px; }
    a { color: var(--red-primary); text-decoration: none; word-break: break-all; font-weight: 500; }
    a:hover { text-decoration: underline; color: var(--red-hover); }
    .callout { background: var(--red-soft); border-left: 4px solid var(--red-primary); padding: 14px 18px; border-radius: 0 10px 10px 0; margin: 20px 0; font-size: 14px; }
    .code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; background: var(--card-inner); padding: 12px 16px; border-radius: 8px; font-size: 13px; margin: 12px 0; word-break: break-all; border: 1px solid var(--border); color: var(--gold-accent); }
    footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border); text-align: center; font-size: 13px; color: var(--muted); }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-box">
      <div class="logo-box">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
          <rect x="54" y="20" width="92" height="158" rx="7" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
          <rect x="66" y="38" width="68" height="54" rx="4" fill="#7f1d1d" />
          <rect x="72" y="44" width="56" height="42" rx="1" fill="#8da88a" />
          <g fill="#2d4a2b">
            <rect x="94" y="50" width="4" height="4"/><rect x="98" y="50" width="4" height="4"/><rect x="102" y="50" width="4" height="4"/><rect x="98" y="54" width="4" height="4"/>
            <rect x="86" y="78" width="4" height="4"/><rect x="90" y="78" width="4" height="4"/><rect x="94" y="78" width="4" height="4"/><rect x="98" y="78" width="4" height="4"/><rect x="102" y="78" width="4" height="4"/>
          </g>
          <rect x="82" y="112" width="10" height="10" rx="2" fill="#fbbf24" />
          <rect x="70" y="123" width="10" height="10" rx="2" fill="#fbbf24" />
          <rect x="94" y="123" width="10" height="10" rx="2" fill="#fbbf24" />
          <rect x="82" y="134" width="10" height="10" rx="2" fill="#fbbf24" />
          <circle cx="128" cy="127" r="9" fill="#fbbf24" />
        </svg>
      </div>
      <div>
        <div class="badge">Google Play Store &bull; Política de Privacidade Oficial</div>
        <h1>Política de Privacidade — ${appData.name}</h1>
        <div class="meta">
          <strong>Pacote:</strong> ${appData.packageName} &bull; <strong>Contato:</strong> ${appData.email} &bull; <strong>Data:</strong> ${appData.lastUpdatedPT}
        </div>
      </div>
    </div>

    <h2>1. Introdução e Visão Geral</h2>
    <p>Esta Política de Privacidade descreve como o aplicativo móvel <strong>${appData.name}</strong> trata informações durante a sua experiência de uso. O jogo é casual, gratuito e projetado para funcionar prioritariamente de forma <strong>offline</strong>.</p>
    <p>Estamos em total conformidade com as diretrizes da <strong>Google Play Store</strong>, a <strong>LGPD (Brasil - Lei nº 13.709/2018)</strong> e o <strong>GDPR (União Europeia)</strong>.</p>

    <h2>2. Coleta e Armazenamento de Dados</h2>
    <h3>2.1. O que NÃO coletamos:</h3>
    <ul>
      <li><strong>Sem Cadastro ou Login:</strong> Você não precisa fornecer nome, e-mail, telefone ou senhas.</li>
      <li><strong>Sem Dados Financeiros:</strong> Não coletamos informações bancárias nem de pagamento.</li>
      <li><strong>Sem Permissões Invasivas:</strong> Não acessamos GPS/localização precisa, microfone, câmera, agenda de contatos ou galeria de fotos.</li>
    </ul>

    <h3>2.2. Armazenamento Local no Aparelho (Offline):</h3>
    <p>O jogo grava pontuações máximas (High Scores), fases desbloqueadas e preferências de som unicamente na memória interna do seu aparelho (<em>Local Storage / SharedPreferences</em>). Esses dados nunca são enviados a servidores externos.</p>

    <h2>3. Serviços de Terceiros e Anúncios (Google AdMob)</h2>
    <p>Para manter o jogo gratuito, utilizamos o <strong>Google AdMob (Google Mobile Ads SDK)</strong> da Google LLC.</p>
    <p>O SDK do Google AdMob pode processar:</p>
    <ul>
      <li><strong>Identificador de Publicidade do Google (Google Advertising ID - AAID):</strong> Identificador de dispositivo redefinível.</li>
      <li><strong>Dados de Diagnóstico e Desempenho:</strong> Versão do sistema Android, modelo do aparelho e relatórios de falhas.</li>
      <li><strong>Métricas de Anúncios:</strong> Visualizações, cliques e impressões de banners/intersticiais.</li>
      <li><strong>Localização Geral:</strong> Nível amplo de país/cidade estimado pelo IP para direcionamento de anúncios no idioma correto (sem GPS).</li>
    </ul>
    <p>Consulte os termos oficiais do Google em: <a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a></p>

    <h2>4. Privacidade de Menores (COPPA)</h2>
    <p>O aplicativo não coleta deliberadamente dados pessoais de crianças menores de 13 anos e cumpre os requisitos da COPPA e as políticas para famílias da Google Play.</p>

    <h2>5. Seus Direitos (LGPD e GDPR)</h2>
    <p>Para redefinir ou excluir seu ID de Publicidade no Android:</p>
    <ol>
      <li>Abra as <strong>Configurações</strong> do aparelho Android.</li>
      <li>Toque em <strong>Google</strong> &rarr; <strong>Anúncios</strong>.</li>
      <li>Selecione <strong>Redefinir o código de publicidade</strong> ou <strong>Excluir o código de publicidade</strong>.</li>
    </ol>

    <h2>6. Arquivo Oficial app-ads.txt</h2>
    <div class="code">${appData.admobLine}</div>

    <h2>7. Contato do Desenvolvedor</h2>
    <p>Para dúvidas, suporte ou solicitações: <a href="mailto:${appData.email}">${appData.email}</a></p>

    <footer>
      &copy; 2026 ${appData.developer}. Todos os direitos reservados. ${appData.name}.
    </footer>
  </div>
</body>
</html>`;

  const markdownContentPT = `# Política de Privacidade — ${appData.name}

**Última atualização:** ${appData.lastUpdatedPT}  
**Aplicativo:** ${appData.name}  
**Identificador do Pacote (Package Name):** \`${appData.packageName}\`  
**Desenvolvedor / Suporte:** ${appData.email}  

---

## 1. Introdução e Visão Geral
Esta Política de Privacidade descreve como o aplicativo móvel **${appData.name}** ("Aplicativo", "Jogo", "Nós") trata as informações durante a sua utilização. O aplicativo é fornecido como um jogo casual, gratuito e projetado prioritariamente para funcionar **offline**.

Nós respeitamos a sua privacidade e estamos comprometidos em proteger os dados pessoais de todos os nossos usuários, em estrita conformidade com as diretrizes da **Google Play Store (Google Play Developer Policies)**, a **Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018 do Brasil)** e o **Regulamento Geral sobre a Proteção de Dados (GDPR - União Europeia)**.

---

## 2. Coleta e Tratamento de Dados Pessoais

### 2.1. Dados que NÃO coletamos diretamente
O **${appData.name}** foi desenvolvido com foco na privacidade por padrão (*Privacy by Design*). Portanto:
- **Não exigimos cadastro ou criação de contas:** Você não precisa fornecer nome, e-mail, telefone, nome de usuário ou senha para jogar.
- **Não coletamos dados financeiros ou bancários:** O aplicativo é gratuito e não solicita dados de cartão de crédito ou transações financeiras.
- **Não solicitamos permissões sensíveis:** O jogo não acessa sua localização precisa (GPS), câmera, microfone, agenda de contatos, SMS ou arquivos pessoais de mídia.

### 2.2. Armazenamento Local no Dispositivo
O jogo armazena apenas dados de desempenho e configurações técnicas diretamente na memória interna do seu dispositivo (*Local Storage / SharedPreferences*), tais como:
- Recordes e pontuações máximas (High Scores);
- Fases desbloqueadas e progresso do jogo;
- Preferências de áudio (efeitos sonoros e música ativados/desativados).

**Importante:** Esses dados ficam salvos exclusivamente no seu aparelho celular. Eles **não** são transmitidos para nossos servidores nem compartilhados com terceiros. Ao desinstalar o jogo ou limpar o armazenamento nas configurações do Android, esses dados serão excluídos definitivamente.

---

## 3. Serviços de Terceiros e Publicidade (Google AdMob)

Para manter o jogo gratuito e viabilizar o desenvolvimento contínuo, o aplicativo utiliza o serviço de publicidade **Google AdMob** (Google Mobile Ads SDK), fornecido pela Google LLC.

### 3.1. Dados Coletados pelo Google AdMob
O SDK do Google AdMob pode coletar e processar automaticamente determinadas informações técnicas do dispositivo para fins de veiculação, personalização, auditoria e prevenção contra fraudes em anúncios:
- **Identificador de Publicidade do Google (Google Advertising ID - AAID / GAID):** Identificador exclusivo do dispositivo redefinível pelo usuário.
- **Dados técnicos e de diagnóstico:** Modelo do dispositivo, fabricante, versão do sistema operacional Android, idioma, operadora de rede móvel, tipo de conexão de rede e relatórios de falhas (*crash logs*).
- **Interações com Anúncios:** Visualizações de anúncios, cliques, impressões e métricas de desempenho.
- **Localização aproximada (nível de cidade/região):** Derivada do endereço IP para veicular anúncios relevantes à sua região geográfica geral (não acessamos GPS ou localização precisa).

### 3.2. Políticas e Transparência do Google
- **Política de Privacidade do Google:** https://policies.google.com/privacy
- **Como o Google usa as informações de sites ou apps parceiros:** https://policies.google.com/technologies/partner-sites
- **Gerenciamento de Preferências de Anúncios:** https://adssettings.google.com

---

## 4. Declaração do Formulário de Segurança dos Dados da Google Play (Data Safety)
- **Dados coletados por SDKs terceiros:** Identificadores de dispositivo (Advertising ID), diagnósticos e dados de interação com anúncios para fins de publicidade e prevenção a fraudes via Google AdMob.
- **Criptografia em trânsito:** Todas as comunicações realizadas pelo SDK do Google AdMob utilizam protocolos criptografados seguros (HTTPS/TLS).
- **Compartilhamento de dados:** Não vendemos dados de usuários.

---

## 5. Privacidade de Crianças e Menores de Idade (COPPA & Google Play Families)
O **${appData.name}** é um jogo casual para público geral. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos e respeitamos integralmente as diretrizes da COPPA e Google Play Families.

---

## 6. Seus Direitos de Privacidade (LGPD, GDPR e CCPA)
Para redefinir ou excluir seu ID de Publicidade no Android:
1. Abra as **Configurações** do seu aparelho Android.
2. Toque em **Google** (ou *Privacidade > Anúncios*).
3. Toque em **Anúncios**.
4. Escolha **Redefinir o código de publicidade** ou **Excluir o código de publicidade**.

---

## 7. Arquivo app-ads.txt Autorizado
\`\`\`
${appData.admobLine}
\`\`\`

---

## 8. Contato do Desenvolvedor
- **Desenvolvedor:** ${appData.developer}
- **E-mail:** ${appData.email}
- **Pacote Android:** \`${appData.packageName}\`
`;

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Bar Contract (1-Row, 3-Zones) */}
      <header className="border-b border-red-950/40 bg-[#161b22]/95 backdrop-blur sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element Brand wordmark with Retro Console Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <AppLogo size="sm" />
            <a href="#" className="text-base font-extrabold tracking-tight text-white hover:text-red-400 transition-colors flex items-center gap-2">
              <span>{appData.name}</span>
            </a>
          </div>

          {/* Zone 2: Navigation tabs tailored for users and developers */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0d1117]/80 p-1 rounded-xl border border-red-950/60">
            <button
              onClick={() => setActiveTab('policy')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'policy'
                  ? 'bg-red-600 text-white shadow-sm shadow-red-950'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              {lang === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-red-600 text-white shadow-sm shadow-red-950'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              {lang === 'pt' ? 'Termos de Uso' : 'Terms of Service'}
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-red-600 text-white shadow-sm shadow-red-950'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageCircleQuestion className="w-3.5 h-3.5" />
              {lang === 'pt' ? 'Ajuda & Suporte' : 'Help & Support'}
            </button>

            <button
              onClick={() => setActiveTab('developer')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'developer'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              {lang === 'pt' ? 'Área do Desenvolvedor' : 'Dev / app-ads.txt'}
            </button>
          </nav>

          {/* Zone 3: Primary Actions (Language toggle + app-ads.txt link) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-700 bg-[#0d1117] hover:bg-slate-800 text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Trocar Idioma / Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-red-400" />
              <span className="uppercase font-mono">{lang === 'pt' ? 'PT-BR' : 'EN'}</span>
            </button>

            <a
              href="/app-ads.txt"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-600/40 rounded-lg hover:bg-amber-900/40 transition-colors"
            >
              <span>/app-ads.txt</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden border-t border-slate-800 px-2 py-2 overflow-x-auto gap-1 bg-[#161b22]">
          <button
            onClick={() => setActiveTab('policy')}
            className={`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap ${
              activeTab === 'policy' ? 'bg-red-600 text-white' : 'text-slate-400'
            }`}
          >
            Privacidade
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap ${
              activeTab === 'terms' ? 'bg-red-600 text-white' : 'text-slate-400'
            }`}
          >
            Termos
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap ${
              activeTab === 'faq' ? 'bg-red-600 text-white' : 'text-slate-400'
            }`}
          >
            Suporte
          </button>
          <button
            onClick={() => setActiveTab('developer')}
            className={`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap ${
              activeTab === 'developer' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400'
            }`}
          >
            Dev Tools
          </button>
        </div>
      </header>

      {/* Hero Showcase with Retro Console Logo & Brick Aesthetic */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0e10] via-[#161b22] to-[#0d1117] border-b border-red-950/40 py-10 px-4 sm:px-6">
        {/* Subtle Background Retro Brick Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Left Text & Badges */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs font-semibold mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-950/80 border border-red-800/80 text-red-300">
                <Gamepad2 className="w-3.5 h-3.5 text-red-400" />
                Jogo Casual Retrô
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-300">
                <WifiOff className="w-3.5 h-3.5 text-emerald-400" />
                100% Offline
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/80 border border-amber-800/80 text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Google Play & LGPD OK
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {appData.name}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              {lang === 'pt' 
                ? 'Portal oficial de transparência, política de privacidade e conformidade da Google Play Store.'
                : 'Official privacy policy, transparency, and Google Play Store compliance portal.'}
            </p>

            {/* Quick Identifiers Strip */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-5 text-xs">
              <div className="px-3 py-1.5 bg-[#0d1117] border border-slate-800 rounded-xl font-mono text-slate-300 flex items-center gap-2 shadow-sm">
                <span className="text-slate-500">Pacote:</span>
                <span className="text-red-400 font-semibold">{appData.packageName}</span>
                <button
                  onClick={() => copyToClipboard(appData.packageName, 'pkg_hero')}
                  className="p-1 hover:text-white transition-colors cursor-pointer text-slate-500"
                  title="Copiar nome do pacote"
                >
                  {copiedKey === 'pkg_hero' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <div className="px-3 py-1.5 bg-[#0d1117] border border-slate-800 rounded-xl font-mono text-slate-300 flex items-center gap-2 shadow-sm">
                <span className="text-slate-500">Suporte:</span>
                <a href={`mailto:${appData.email}`} className="text-amber-300 hover:underline">{appData.email}</a>
              </div>
            </div>
          </div>

          {/* Right: Iconic Retro Console Graphic Card */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative p-6 bg-gradient-to-br from-[#2a1315] to-[#161b22] border-2 border-red-900/60 rounded-3xl shadow-2xl flex flex-col items-center group hover:border-red-600 transition-colors">
              <AppLogo size="xl" showBackgroundWall={true} />
              <div className="mt-4 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  BRICK GAME CLASSIC
                </span>
                <div className="text-[12px] text-slate-400 mt-0.5">Versão Android Oficial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {/* TAB 1: PRIVACY POLICY (MAIN VIEW) */}
        {activeTab === 'policy' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Player Privacy Highlights & Developer Summary */}
            <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
              {/* Card 1: Player Privacy Guarantee */}
              <div className="bg-[#161b22] border border-red-950/60 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Lock className="w-4 h-4" />
                  {lang === 'pt' ? 'Garantia ao Jogador' : 'Player Guarantee'}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {lang === 'pt' ? 'Sua privacidade é prioridade' : 'Privacy by Design'}
                </h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {lang === 'pt'
                    ? 'O Mini Game: Brick offline não armazena dados em servidores externos, não exige cadastro e salva tudo somente no seu aparelho.'
                    : 'Mini Game: Brick offline never sends data to external servers and saves everything on your physical device.'}
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Offline:</strong> Pontuações e fases salvas apenas no celular.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Zero Permissões Invasivas:</strong> Sem câmera, GPS ou microfone.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Google AdMob Verificado:</strong> Anúncios seguros certificados pelo Google.</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Contact Box */}
              <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-400" />
                  {lang === 'pt' ? 'Suporte ao Usuário' : 'Player Support'}
                </h3>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                  {lang === 'pt'
                    ? 'Dúvidas sobre sua privacidade, sugestões ou suporte técnico? Entre em contato diretamente:'
                    : 'Questions regarding your privacy or game feedback? Reach out directly:'}
                </p>

                <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-200 truncate">
                    {appData.email}
                  </span>
                  <a
                    href={`mailto:${appData.email}`}
                    className="px-2.5 py-1 text-xs bg-red-600 hover:bg-red-500 text-white font-semibold rounded-md transition-colors cursor-pointer shrink-0"
                  >
                    Enviar
                  </a>
                </div>
              </div>

              {/* Card 3: Switch to Dev Tools */}
              <div className="bg-[#161b22]/70 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-300">Painel do Desenvolvedor</div>
                  <div className="text-[11px] text-slate-500">Baixar arquivos app-ads.txt e index.html</div>
                </div>
                <button
                  onClick={() => setActiveTab('developer')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Abrir &rarr;
                </button>
              </div>
            </div>

            {/* Right Column: Full Official Policy Document */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="bg-[#161b22] border border-slate-800/90 rounded-2xl p-6 sm:p-10 shadow-xl text-slate-200">
                <div className="border-b border-slate-800 pb-6 mb-8">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-950/80 border border-red-800/80 text-red-400 text-xs font-semibold mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Documento Oficial Google Play & LGPD
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {lang === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
                  </h2>
                  <p className="text-sm font-semibold text-red-400 mt-1">{appData.name}</p>
                  
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 mt-3">
                    <span><strong>Pacote:</strong> {appData.packageName}</span>
                    <span>·</span>
                    <span><strong>Desenvolvedor:</strong> {appData.developer}</span>
                    <span>·</span>
                    <span><strong>Atualizado em:</strong> {lang === 'pt' ? appData.lastUpdatedPT : appData.lastUpdatedEN}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
                  <section>
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-red-400 font-mono text-sm">1.</span>
                      {lang === 'pt' ? 'Introdução e Visão Geral' : '1. Introduction & Overview'}
                    </h3>
                    <p className="text-slate-300">
                      {lang === 'pt' 
                        ? `Esta Política de Privacidade descreve como o aplicativo móvel ${appData.name} ("Aplicativo", "Jogo", "Nós") gerencia informações durante a sua utilização. O aplicativo é fornecido como um jogo casual, gratuito e projetado prioritariamente para funcionar de forma offline.`
                        : `This Privacy Policy outlines how the mobile game ${appData.name} ("App", "Game", "We") handles information during your use. The game is free, casual, and designed primarily to operate offline.`}
                    </p>
                    <p className="mt-2 text-slate-300">
                      {lang === 'pt'
                        ? 'Respeitamos a sua privacidade e estamos comprometidos com a transparência total, em conformidade com as Políticas para Desenvolvedores da Google Play Store, a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018 do Brasil) e o Regulamento Geral sobre a Proteção de Dados (GDPR - União Europeia).'
                        : 'We respect your privacy and are committed to full compliance with Google Play Developer Policies, Brazil\'s LGPD, and the European Union\'s GDPR.'}
                    </p>
                  </section>

                  <section className="pt-4 border-t border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-red-400 font-mono text-sm">2.</span>
                      {lang === 'pt' ? 'Coleta e Armazenamento de Dados' : '2. Data Collection & Local Storage'}
                    </h3>
                    <p className="font-semibold text-slate-200 mb-1">
                      {lang === 'pt' ? '2.1. Dados que NÃO coletamos diretamente:' : '2.1. Data We DO NOT Collect Directly:'}
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      <li><strong>{lang === 'pt' ? 'Sem cadastro ou criação de contas:' : 'No accounts or registration:'}</strong> {lang === 'pt' ? 'Você não precisa fornecer nome, e-mail, telefone, usuário ou senha para jogar.' : 'No name, email, phone number, or passwords required.'}</li>
                      <li><strong>{lang === 'pt' ? 'Sem dados bancários ou financeiros:' : 'No financial data:'}</strong> {lang === 'pt' ? 'O jogo é gratuito e não processa cartões de crédito nem cobranças.' : 'The game is free and does not process payments.'}</li>
                      <li><strong>{lang === 'pt' ? 'Sem permissões sensíveis no aparelho:' : 'No invasive device permissions:'}</strong> {lang === 'pt' ? 'O jogo não solicita acesso ao seu GPS (localização precisa), microfone, câmera, agenda de contatos, SMS ou galeria de fotos.' : 'No GPS location, microphone, camera, contacts, or photo gallery access.'}</li>
                    </ul>

                    <div className="bg-[#0d1117] border-l-4 border-red-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-slate-300">
                      <p className="font-semibold text-red-300 mb-1">
                        {lang === 'pt' ? '2.2. Armazenamento Local no Dispositivo (Offline):' : '2.2. Local Storage on Device:'}
                      </p>
                      <p>
                        {lang === 'pt'
                          ? 'Pontuações máximas (High Scores), fases desbloqueadas e preferências de som ficam armazenados exclusivamente na memória local do seu próprio aparelho (SharedPreferences). Eles NUNCA são transmitidos a servidores externos e podem ser excluídos a qualquer momento limpando os dados do aplicativo no menu de configurações do Android.'
                          : 'High scores, unlocked stages, and sound preferences are stored solely on your device (SharedPreferences). They are never sent to external servers.'}
                      </p>
                    </div>
                  </section>

                  <section className="pt-4 border-t border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-red-400 font-mono text-sm">3.</span>
                      {lang === 'pt' ? 'Serviços de Terceiros e Anúncios (Google AdMob)' : '3. Third-Party Ads (Google AdMob)'}
                    </h3>
                    <p className="text-slate-300 mb-2">
                      {lang === 'pt'
                        ? 'Para manter o jogo gratuito, utilizamos a rede de anúncios oficial Google AdMob (Google Mobile Ads SDK), fornecida pela Google LLC. O SDK do Google AdMob pode processar automaticamente:'
                        : 'To support free gameplay, we integrate Google AdMob (Google Mobile Ads SDK). The AdMob SDK may process:'}
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      <li><strong>Google Advertising ID (AAID):</strong> {lang === 'pt' ? 'Identificador de dispositivo para publicidade, que você pode redefinir ou desativar a qualquer momento nas configurações do seu celular.' : 'Resettable advertising identifier on Android.'}</li>
                      <li><strong>{lang === 'pt' ? 'Dados Técnicos e Diagnósticos:' : 'Technical Diagnostics:'}</strong> {lang === 'pt' ? 'Modelo do aparelho, versão do Android, idioma e relatórios anônimos de falhas para correção de bugs.' : 'Device model, Android version, crash logs for stability.'}</li>
                      <li><strong>{lang === 'pt' ? 'Métricas de Exibição:' : 'Ad Metrics:'}</strong> {lang === 'pt' ? 'Contagem de impressões e cliques para auditoria contra fraudes.' : 'Ad impressions, views, and fraud prevention.'}</li>
                      <li><strong>{lang === 'pt' ? 'Localização Geral Estimada:' : 'Coarse Location:'}</strong> {lang === 'pt' ? 'Aproximada por endereço IP (cidade/país) para adequar o idioma dos anúncios (sem uso de GPS).' : 'Broad city/country level via IP for proper language (no GPS).'}</li>
                    </ul>

                    <div className="mt-3 text-xs sm:text-sm text-slate-400 space-y-1">
                      <p>• {lang === 'pt' ? 'Política de Privacidade do Google:' : 'Google Privacy Policy:'} <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">https://policies.google.com/privacy</a></p>
                      <p>• {lang === 'pt' ? 'Como o Google trata informações de apps parceiros:' : 'How Google uses partner data:'} <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">https://policies.google.com/technologies/partner-sites</a></p>
                    </div>
                  </section>

                  <section className="pt-4 border-t border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-red-400 font-mono text-sm">4.</span>
                      {lang === 'pt' ? 'Privacidade de Menores (COPPA & Famílias)' : '4. Children\'s Privacy (COPPA)'}
                    </h3>
                    <p className="text-slate-300">
                      {lang === 'pt'
                        ? 'O aplicativo é voltado para entretenimento do público em geral e cumpre rigorosamente as normas da COPPA (Children\'s Online Privacy Protection Act) e as Políticas para Famílias da Google Play. Não coletamos intencionalmente dados pessoais de menores de 13 anos.'
                        : 'The app is designed for general audiences and strictly complies with COPPA and Google Play Families Policies. We do not knowingly collect personal information from children under 13.'}
                    </p>
                  </section>

                  <section className="pt-4 border-t border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-red-400 font-mono text-sm">5.</span>
                      {lang === 'pt' ? 'Seus Direitos e Como Controlar Anúncios (LGPD/GDPR)' : '5. Your Rights & Ad Settings'}
                    </h3>
                    <p className="text-slate-300 mb-2">
                      {lang === 'pt'
                        ? 'Você tem controle total sobre o Identificador de Anúncios diretamente no seu Android:'
                        : 'You can control or reset your advertising ID anytime directly in Android:'}
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-slate-300 text-xs sm:text-sm">
                      <li>{lang === 'pt' ? 'Abra as Configurações do seu aparelho Android.' : 'Open Android Settings.'}</li>
                      <li>{lang === 'pt' ? 'Toque em Google > Anúncios (ou Privacidade > Anúncios).' : 'Tap Google > Ads (or Privacy > Ads).'}</li>
                      <li>{lang === 'pt' ? 'Selecione "Redefinir o ID de publicidade" ou "Excluir o ID de publicidade".' : 'Tap "Reset advertising ID" or "Delete advertising ID".'}</li>
                    </ol>
                  </section>

                  <section className="pt-4 border-t border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-red-400 font-mono text-sm">6.</span>
                      {lang === 'pt' ? 'Contato do Desenvolvedor' : '6. Developer Contact'}
                    </h3>
                    <p className="text-slate-300">
                      {lang === 'pt' ? 'Para qualquer dúvida, sugestão ou suporte, fale diretamente com o desenvolvedor:' : 'For inquiries or support, contact the developer:'}
                    </p>
                    <div className="mt-2 bg-[#0d1117] p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-red-400" />
                        <span className="font-mono text-sm text-slate-200">{appData.email}</span>
                      </div>
                      <a
                        href={`mailto:${appData.email}`}
                        className="px-2.5 py-1 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                      >
                        Enviar E-mail
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TERMS OF SERVICE */}
        {activeTab === 'terms' && (
          <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-lg text-slate-200 max-w-4xl mx-auto">
            <div className="border-b border-slate-800 pb-6 mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-950/80 border border-red-800/80 text-red-400 text-xs font-semibold mb-3">
                <Scale className="w-3.5 h-3.5" />
                Termos de Uso Oficiais
              </div>
              <h2 className="text-2xl font-bold text-white">Termos de Serviço e Uso</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Aplicativo: <strong>{appData.name}</strong> • Desenvolvedor: {appData.developer}
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-white mb-1">1. Licença de Uso</h3>
                <p>O aplicativo {appData.name} é fornecido gratuitamente para uso pessoal e recreativo. É vedada a engenharia reversa, redistribuição não autorizada ou modificação do código-fonte do jogo.</p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <h3 className="text-base font-bold text-white mb-1">2. Isenção de Garantias</h3>
                <p>O jogo é fornecido no estado em que se encontra ("as is"). Embora nos empenhemos em oferecer uma experiência estável e livre de erros, o desenvolvedor não se responsabiliza por eventuais perdas de recordes ou dados locais decorrentes de problemas no hardware do usuário ou desinstalação do aplicativo.</p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <h3 className="text-base font-bold text-white mb-1">3. Publicidade</h3>
                <p>Para assegurar a gratuidade do jogo, são veiculados anúncios fornecidos pela rede Google AdMob. O usuário concorda com a exibição de banners ou anúncios intersticiais durante o uso do jogo.</p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <h3 className="text-base font-bold text-white mb-1">4. Contato</h3>
                <p>Dúvidas sobre estes termos podem ser enviadas para: <a href={`mailto:${appData.email}`} className="text-red-400 hover:underline">{appData.email}</a>.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HELP & SUPPORT (FAQ) */}
        {activeTab === 'faq' && (
          <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-lg text-slate-200 max-w-4xl mx-auto">
            <div className="border-b border-slate-800 pb-6 mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-semibold mb-3">
                <MessageCircleQuestion className="w-3.5 h-3.5" />
                Central de Ajuda ao Jogador
              </div>
              <h2 className="text-2xl font-bold text-white">Perguntas Frequentes & Suporte</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tire suas dúvidas sobre o funcionamento do jogo <strong>{appData.name}</strong>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-red-400" />
                  O jogo funciona sem internet (offline)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Sim! O jogo foi desenvolvido especificamente para funcionar offline. Você pode jogar em qualquer lugar sem gastar seu plano de dados móveis.
                </p>
              </div>

              <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  Onde ficam salvas minhas pontuações e recordes?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Suas pontuações e configurações ficam salvas apenas na memória interna do seu próprio aparelho celular. Não enviamos seus recordes para a nuvem.
                </p>
              </div>

              <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  Como desativar ou redefinir anúncios personalizados?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Vá em <strong>Configurações do Android &rarr; Google &rarr; Anúncios</strong> e toque em "Redefinir o ID de publicidade" ou "Excluir o ID de publicidade".
                </p>
              </div>

              <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-400" />
                  Como reportar um erro ou sugerir melhorias?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Basta enviar um e-mail para <a href={`mailto:${appData.email}`} className="text-red-400 font-mono hover:underline">{appData.email}</a> com detalhes do seu aparelho e o que aconteceu.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DEVELOPER TOOLS & EXPORT */}
        {activeTab === 'developer' && (
          <div className="space-y-6">
            <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-800/80 text-amber-400 text-xs font-semibold mb-2">
                    <Terminal className="w-3.5 h-3.5" />
                    Painel do Desenvolvedor & Publicação
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Arquivo app-ads.txt e Exportação para GitHub Pages
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Ferramentas de publicação para Google Play Console, AdMob e GitHub Pages.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => downloadFile('index.html', standaloneHTML, 'text/html;charset=utf-8')}
                    className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    Baixar index.html
                  </button>

                  <button
                    onClick={() => downloadFile('app-ads.txt', `${appData.admobLine}\n`, 'text/plain;charset=utf-8')}
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    Baixar app-ads.txt
                  </button>
                </div>
              </div>

              {/* Code Box Display */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-medium text-slate-400 flex items-center justify-between">
                  <span>Conteúdo oficial do arquivo app-ads.txt (AdMob):</span>
                  <span className="text-[11px] font-mono text-amber-400">Content-Type: text/plain</span>
                </label>
                <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-4 font-mono text-sm text-amber-300 flex items-center justify-between overflow-x-auto">
                  <code>{appData.admobLine}</code>
                  <button
                    onClick={() => copyToClipboard(appData.admobLine, 'dev_admob_line')}
                    className="ml-3 p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg shrink-0 transition-colors cursor-pointer"
                    title="Copiar"
                  >
                    {copiedKey === 'dev_admob_line' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Step by step GitHub Pages guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#0d1117] border border-slate-800 p-4 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold font-mono mb-2">1</div>
                  <h4 className="text-xs font-bold text-white mb-1">Crie o Repositório</h4>
                  <p className="text-xs text-slate-400">Crie um repo público no GitHub (ex: <code>brick-privacy</code>).</p>
                </div>

                <div className="bg-[#0d1117] border border-slate-800 p-4 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold font-mono mb-2">2</div>
                  <h4 className="text-xs font-bold text-white mb-1">Suba os 2 Arquivos</h4>
                  <p className="text-xs text-slate-400">Faça upload de <code>index.html</code> e <code>app-ads.txt</code> na raiz do repositório.</p>
                </div>

                <div className="bg-[#0d1117] border border-slate-800 p-4 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono mb-2">3</div>
                  <h4 className="text-xs font-bold text-white mb-1">Ative o GitHub Pages</h4>
                  <p className="text-xs text-slate-400">Em Settings &gt; Pages, selecione a branch <code>main</code> e salve.</p>
                </div>
              </div>

              {/* Data safety form reference */}
              <div className="mt-6 bg-[#0d1117] border border-slate-800 p-4 rounded-xl">
                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-400" />
                  Resumo para o Formulário "Segurança dos Dados" (Google Play Console):
                </h4>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Coleta/Compartilhamento: <strong>Sim</strong> (AdMob).</li>
                  <li>• Criptografado em trânsito: <strong>Sim</strong>.</li>
                  <li>• Dispositivo ou outros IDs: <strong>Coletado e Compartilhado</strong> (Publicidade e Prevenção de Fraudes).</li>
                  <li>• Diagnósticos / Logs de falha: <strong>Coletado</strong> (Análise do App).</li>
                  <li>• Localização precisa, Fotos, Contatos, Financeiro: <strong>NÃO</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Retro Styled Clean Footer */}
      <footer className="border-t border-red-950/40 bg-[#161b22]/80 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AppLogo size="sm" />
            <span>&copy; 2026 {appData.developer} &bull; {appData.name} ({appData.packageName})</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href={`mailto:${appData.email}`} className="hover:text-red-400 transition-colors">
              {appData.email}
            </a>
            <span>·</span>
            <a href="/app-ads.txt" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
              app-ads.txt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
