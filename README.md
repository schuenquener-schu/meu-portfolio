# 🚀 Portfólio Profissional - Vitor

Este repositório contém o código-fonte do **Portfólio Profissional do Vitor**, projetado com estética moderna (*Dark Mode*, *Glassmorphism*, paleta ciano/azul/violeta e micro-interações dinâmicas), destacando soluções reais em automação, sistemas corporativos e engenharia de dados.

---

## 🛠️ Stack Tecnológica

- **Frontend**: HTML5 Semântico, Vanilla CSS Moderno (Design System com Variáveis CSS), JavaScript ES6+ Modular.
- **Tipografia**: Google Fonts (*Outfit* para UI/Títulos e *JetBrains Mono* para código/terminal).
- **Recursos Interativos**:
  - 🎨 **Galeria de Projetos Dinâmica**: Filtros por categoria e Modal completo com arquitetura e métricas.
  - 💻 **Terminal / Console CLI**: Ambiente virtual interativo para navegação rápida de bio, skills, projetos e métricas.
  - 📊 **Contadores Animados**: Indicadores de impacto operacional usando `IntersectionObserver`.
  - 📱 **Design Responsivo**: Adaptado para resoluções Desktop, Tablet e Mobile.

---

## 📂 Estrutura de Arquivos

```
Portifolio/
├── css/
│   └── style.css.txt          # Design system completo e estilos visuais
├── js/
│   ├── projects-data.js.txt   # Base de dados estruturada dos projetos reais
│   └── main.js.txt            # Controladores de interatividade, modal e terminal
├── assets/                    # Ícones e recursos visuais
├── index.html.txt             # Estrutura HTML do portfólio
├── serve.py                   # Servidor HTTP local em Python
├── build_export.py            # Compilador para deploy (GitHub Pages / Vercel)
└── README.md                  # Documentação do projeto
```

---

## ▶️ Como Executar Localmente

Para rodar o portfólio em seu ambiente local, execute no terminal:

```bash
python serve.py
```

Em seguida, acesse no navegador:
👉 **`http://localhost:3000`**

---

## 📦 Como Gerar Pacote de Deploy (GitHub Pages / Vercel)

Para exportar os arquivos com as extensões padrão (`.html`, `.css`, `.js`), execute:

```bash
python build_export.py C:\caminho\para\pasta_destino
```
