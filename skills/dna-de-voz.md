# Skill — dna-de-voz

## Função
Extrair o jeito real de escrever do cliente a partir de material que ele já publicou, e
transformar isso em regra de produção. É o que impede o sistema de escrever "conteúdo de IA"
na primeira semana.

## Quando rodar
- Na implantação, logo depois de `ingestao-dossie.md`
- Sempre que o cliente reclamar que "não parece eu"
- A cada 3 meses, pra atualizar

## Input (em ordem de valor)
1. Posts que o próprio cliente indicou como bons (os que ele colou na entrevista)
2. Legendas de 10 a 15 posts recentes do Instagram dele
3. Textos do site, principalmente a página "sobre"
4. Transcrição dos áudios da entrevista (é a fonte mais honesta, é ele falando solto)
5. Mensagens de WhatsApp que ele manda pra cliente, se ele topar compartilhar

Se nada disso existir, avisar: sem amostra o DNA é chute, e é melhor gerar 3 variações de tom
pro cliente escolher do que fingir que existe um DNA.

## O que extrair

### 1. Estrutura
- Tamanho médio da frase, se usa parágrafo curto ou bloco
- Ritmo: seco, cadenciado, corrido
- Pessoa do discurso: eu, a gente, nós, a empresa
- Usa pergunta retórica? Usa lista? Usa emoji? Quantos?

### 2. Vocabulário
- As 15 palavras que mais aparecem e não são palavra comum
- Gírias, regionalismos, jeito próprio de nomear as coisas
- Como ele chama o cliente dele (paciente, aluno, parceiro, cliente, você)
- Termos técnicos que ele usa sem explicar (indica o nível que ele assume do público)

### 3. Aberturas e fechos reais
Colar 3 aberturas e 2 fechos LITERAIS. Não parafrasear. São eles que serão reaproveitados.

### 4. Frases-assinatura
Frases que só ele fala. Viram patrimônio da marca e podem ser repetidas de propósito.

### 5. O que ele evita naturalmente
Comparar com o padrão do nicho: o que os concorrentes fazem e ele não faz. Isso costuma ser
posicionamento sem ele ter percebido.

## Output
Preencher `_memoria/dna-de-voz.md` completo, incluindo o campo `PARAGRAFO_TESTE`.

## Teste de calibragem (obrigatório)
Antes de fechar, escrever 3 parágrafos curtos sobre o mesmo assunto:
- **A** — na voz extraída
- **B** — meio grau mais informal
- **C** — meio grau mais técnico

Mandar os três pro cliente sem dizer qual é qual e perguntar: "qual desses parece você?"
A escolha dele calibra o DNA. Só depois disso o arquivo é considerado aprovado.

## Regras
- Amostra real sempre vence adjetivo de tom de voz. Se o cliente disse "descontraído" mas
  escreve formal, o que vale é o que ele escreve
- Nunca copiar frase inteira de referência externa, só padrão estrutural
- Registrar a data e as fontes usadas, pra dar pra refazer depois
