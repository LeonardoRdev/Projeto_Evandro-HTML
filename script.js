// BARRA COM MENU
const menuIcon = document.querySelector("#menuIcon");
const finalizarQuiz = document.querySelector("#enviar");

menuIcon.onclick = function () {
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



// SIGNOS
const signo = document.getElementsByClassName("signo");
let descricaoSigno = document.querySelector("section#descricaoSigno")
for (let s = 0; s < 12; s++) {
    signo[s].onmouseover = function() {
        descricaoSigno.style.display = "flex";
        descricaoSigno.style.flexDirection = "column"
        descricaoSigno.style.justifyContent = "space-between"
        if (s == 0) {
            // Áries
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Áries</p><p class='previsao'>20 de março a 20 de abril</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "15px 200px 0 0"
        }
        else if (s == 1) {
            // Gêmeos
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Gêmeos</p><p class='previsao'>21 de maio a 20 de junho</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "230px 200px 0 0"
        }
        else if (s == 2) {
            // Leão
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Leão</p><p class='previsao'>22 de julho a 22 de agosto</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "445px 200px 0 0"
        }
        else if (s == 3) {
            // Libra
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Libra</p><p class='previsao'>23 de setembro a 22 de outubro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "660px 200px 0 0"
        }
        else if (s == 4) {
            // Sargitário
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Sargitário</p><p class='previsao'>22 de novembro a 21 de dezembro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "875px 200px 0 0"
        }
        else if (s == 5) {
            // Aquário
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Aquário</p><p class='previsao'>21 de janeiro a 19 de fevereiro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "1090px 200px 0 0"
        }
        else if (s == 6) {
            // Touro
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Touro</p><p class='previsao'>21 de abril a 20 de maio</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "15px -200px 0 0"
        }
        else if (s == 7) {
            // Câncer
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Câncer</p><p class='previsao'>21 de junho a 21 de julho</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "230px -200px 0 0"
        }
        else if (s == 8) {
            // Virgem
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Virgem</p><p class='previsao'>23 de agosto a 22 de setembro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "445px -200px 0 0"
        }
        else if (s == 9) {
            // Escorpião
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Escorpião</p><p class='previsao'>23 de outubro a 21 de novembro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "660px -200px 0 0"
        }
        else if (s == 10) {
            // Capricórnio
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Capricórnio</p><p class='previsao'>22 de dezembro a 21 de janeiro</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "875px -200px 0 0"
        }
        else if (s == 11) {
            // Peixes
            descricaoSigno.innerHTML = "<p class='nomeSigno'>Peixes</p><p class='previsao'>20 de fevereiro a 20 de março</p>";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.backgroundColor = "gray";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.margin = "0";
            document.querySelector("section#descricaoSigno p.nomeSigno").style.fontSize = "1.7em";
            document.querySelector("section#descricaoSigno p.previsao").style.backgroundColor = "white";
            document.querySelector("section#descricaoSigno p.previsao").style.margin = "0";
            descricaoSigno.style.margin = "1090px -200px 0 0"
        }
    }
}

//
//
//

// QUIZ VOCACIONAL
finalizarQuiz.onclick = function () {
    let aSuaVocacao = document.querySelector("#sua_vocacao")
    let resultadoCaixa = document.querySelector("#resultado");
    let resultado = document.querySelector("#resultado p");
    let descricaoResultado = document.querySelector("#rating p");

    let programador = 0;
    let designer = 0;
    let redes = 0;
    let seguranca = 0;
    let vocacao = "Vocação";
    let descricaoVocacao = "Descrição da Vocação"

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
        descricaoVocacao = "Você tem uma vocação para a área de design na TI. Isso significa que você é criativo, tem um olho apurado para detalhes estéticos e gosta de criar interfaces gráficas atraentes e soluções visuais. Sua paixão está em combinar funcionalidade com estética para proporcionar experiências agradáveis aos usuários."
    }
    else if (programador > designer && programador > seguranca && programador > redes) {
        vocacao = "Programador!";
        descricaoVocacao = "Sua vocação aponta para a programação na área de TI. Você é um solucionador de problemas lógico e criativo, com habilidades em escrever código e desenvolver aplicativos. Sua capacidade de transformar conceitos em software funcional é uma habilidade valiosa na indústria de tecnologia."
    }
    else if (seguranca > designer && seguranca > programador && seguranca > redes) {
        vocacao = "Segurança da Informação!";
        descricaoVocacao = "Seu perfil indica uma vocação para a área de segurança da informação. Você é altamente consciente de questões de privacidade e segurança online. Sua capacidade de identificar e lidar com ameaças cibernéticas é essencial para proteger dados e sistemas críticos."
    }
    else if (redes > designer && redes > programador && redes > seguranca) {
        vocacao = "Redes!";
        descricaoVocacao = "Sua vocação está na área de redes de computadores. Isso significa que você é habilidoso em configurar, otimizar e solucionar problemas de conectividade de redes. Você gosta de entender como os dispositivos se comunicam e garantir que a infraestrutura de rede funcione de maneira eficaz e eficiente."
    }
    else if (designer == 0 && programador == 0 && seguranca == 0 && redes == 0){
        vocacao = "Apressado!!";
        descricaoVocacao = "Responda ao quiz para descobrir a sua vocação!"
    }
    else {
        vocacao = "Versátil"
        descricaoVocacao = "Suas respostas sugerem um perfil versátil em TI, abrangendo várias áreas de interesse. O quiz não forneceu uma indicação clara de uma única vocação, o que pode ser considerado uma vantagem, pois você tem a capacidade de se destacar em diferentes domínios da tecnologia!"
    }

    // Exibe quantos pontos cada vocação marcou -> Designer, Programador, Segurança e Redes respectivamente.
    // alert("Aqui estão todos:" + designer + programador + seguranca + redes);

    aSuaVocacao.style.display = "block";
    resultadoCaixa.style.display = "block";
    resultado.innerHTML = vocacao;
    descricaoResultado.innerHTML = descricaoVocacao
}
