# Plano de Reestruturação da Seção "Nossas Obras"

Reorganizar a seção de portfólio para exibir as obras da LJM Calixto em grupos específicos, com destaque para a construção do muro, reforma de telhado e barbearia, seguindo a ordem cronológica e lógica solicitada.

## Alterações Propostas

### 🎨 UI Architect
- **Componente `Projects.tsx`**:
    - Renomear título para "Nossas Obras" e atualizar subtítulo.
    - Implementar estrutura de grupos com títulos claros.
    - **Grupo 1 (Muro)**: Layout de destaque, selo "Obra de grande porte", grid cronológico (início -> meio -> fim).
    - **Grupo 2 (Telhado)**: Sequência de processo (antes -> durante -> finalização).
    - **Grupo 3 (Barbearia)**: Layout de comparação "Antes e Depois" em pares.
    - Adicionar legendas discretas e centralizadas para cada foto.
    - Garantir responsividade: grid no desktop, empilhamento no mobile (mantendo pares lado a lado quando possível no desktop).

### 🔍 Code Auditor
- Validar acessibilidade das legendas e imagens (alt text).
- Garantir que a estrutura de `z-index` e temas `dark` permaneçam consistentes.

## Detalhes Técnicos
- Utilização de `framer-motion` para animações suaves ao revelar os grupos.
- Manutenção do tema `dark` na seção para contraste conforme solicitado anteriormente.
- As imagens serão placeholders descritivos conforme o padrão atual, aguardando substituição por fotos reais.

---
**Observação**: Nenhuma outra seção (Hero, Navbar, Footer, WhatsApp) será alterada.