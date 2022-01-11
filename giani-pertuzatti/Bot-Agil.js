const Planning = "É uma reunião semanal de planejamento"
const Sprint = "É o conjunto de etapas para a conclusão de uma determinada tarefa"
const Retro = "É a retrospectiva de uma determinado atividade"

function pergunta(opcao){
    if(opcao === 1){
        return `Planning: ${Planning}`
    }else if(opcao === 2){
        return `Sprint: ${Sprint}`
    }else if (opcao === 3){
        return `Retro: ${Retro}`
    } else if(opcao == "X"){
        return "Programa encerrado"
    }
}
console.log (`Olá! Selecione uma opção abaixo, que deseja saber informações do que significa na metodologia ágil: 
\n1 - Planning
\n2 - Sprint
\n3 - Retro
\nX - Encerrar\n`)

const opcao = "X"

console.log(pergunta(opcao))