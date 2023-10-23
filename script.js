const menuIcon = document.querySelector("#menuIcon");
const finalizarQuiz = document.querySelector("#enviar");

menuIcon.onclick = function() {
    let menu = document.querySelector("nav");
    if (menu.style.transform == "translateY(85px)") {
        menuIcon.style.transform = "rotateZ(0deg)";
        menu.style.transform = "translateY(-180px)";
    }
    else {
        menuIcon.style.transform = "rotateZ(90deg)";
        menu.style.transform = "translateY(85px)";
    }
}

finalizarQuiz.onclick = function() {
    let resultadoCaixa = document.querySelector("#resultado");
    let resultado = document.querySelector("#resultado p");
    let descricaoResultado = document.querySelector("#rating p");

    let programador = 0;
    let designer = 0;
    let redes = 0;
    let seguranca = 0;
    let vocacao = "Nenhuma!";
    let descricaoVocacao = "Você não é nínguem / ainda não sei ao certo..."

    let pergunta1 = document.quiz.q1;
    let pergunta2 = document.quiz.q2;
    let pergunta3 = document.quiz.q3;
    let pergunta4 = document.quiz.q4;
    let pergunta5 = document.quiz.q5;
    const perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];

    for (let i = 0; i < 5; i++) {
        if (perguntas[i][0].checked) {
            designer += 1;
        }
        else if (perguntas[i][1].checked) {
            programador += 1;
        }
        else if (perguntas[i][2].checked) {
            seguranca += 1;
        }
        else if (perguntas[i][3].checked) {
            redes += 1;
        }
    }
    if (designer > programador && designer > seguranca && designer > redes) {
        vocacao = "Designer!";
        descricaoVocacao = "Descrição designer"
    }
    else if (programador > designer && programador > seguranca && programador > redes) {
        vocacao = "Programador!";
        descricaoVocacao = "Descrição Programador"
    }
    else if (seguranca > designer && seguranca > programador && seguranca > redes) {
        vocacao = "Segurança!";
        descricaoVocacao = "Descrição Segurança"
    }
    else if (redes > designer && redes > programador && redes > seguranca) {
        vocacao = "Rede!";
        descricaoVocacao = "Descricao Redes Descricao Redes Descricao Redes Descricao Redes Descricao Redes Descricao Redes Descricao Redes Descricao Redes"
    }
    else {
        alert("Deu Velha 💀");
    }

    // Exibe quantos pontos cada vocação marcou -> Designer, Programador, Segurança e Redes respectivamente.
    alert("Aqui estão todos:" + designer + programador + seguranca + redes);

    resultadoCaixa.style.display = "block";
    resultado.innerHTML = vocacao;
    descricaoResultado.innerHTML = descricaoVocacao
}
