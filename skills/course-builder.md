# Skill — course-builder

## Função
Gerar a estrutura completa de um curso e o roteiro de cada aula.

## Inputs obrigatórios
- Promessa central do curso (o que o aluno consegue ao final)
- Público-alvo (ler `_memoria/persona.md`)
- Duração desejada (número de aulas)
- Próximo passo no funil (se houver upsell)
- Ler `_memoria/preferencias.md` para tom de voz

## Output completo

### 1. Estrutura do curso
Salvar em `/cursos/[nome-do-curso]/estrutura.md`:
- Promessa central (1 frase)
- Lista de módulos/aulas em ordem, cada um com:
  - Título
  - Objetivo da aula (o que o aluno aprende/consegue fazer)
  - Formato (vídeo, texto, exercício, checklist)
  - Duração estimada
- Bônus (se houver)
- CTA final / próximo passo no funil

### 2. Roteiro por aula
Para cada aula, salvar em `/cursos/[nome-do-curso]/aulas/[numero]-[titulo-curto].md`:
```
# Aula [N] — [Título]

## Objetivo
[o que o aluno consegue fazer ao final desta aula]

## Roteiro (tópicos, não texto de gravação)
1. [gancho/abertura]
2. [conceito 1]
3. [conceito 2]
4. [demonstração prática, se aplicável]
5. [recap]

## Ação do aluno
[exercício, checklist ou próximo passo concreto]

## CTA (se for a última aula do módulo/curso)
[upsell ou próximo passo no funil]
```

## Regras
- Ordem sempre do básico ao avançado — nunca assumir conhecimento não declarado em `_memoria/persona.md`
- Roteiro é tópico/estrutura, não o texto final de gravação (isso o cliente grava do próprio jeito)
- Toda aula termina com ação concreta para o aluno
- Última aula do curso sempre conecta com o próximo passo do funil (`_memoria/estrategia.md`)
