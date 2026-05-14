// sc_Joao_estado: Controla se a página exibe o herói (true) ou civil (false)
let sc_Joao_estado = false;

// sc_Joao_transformar: Função que altera o conteúdo e o estilo da página
function sc_Joao_transformar() {
    const btn = document.getElementById('sc_Joao_btn_transformar');
    const body = document.getElementById('sc_Joao_body');
    const foto = document.getElementById('sc_Joao_foto');

    if (sc_Joao_estado === false) {
        // --- MUDANDO PARA HOMEM-ARANHA ---
        document.getElementById('sc_Joao_titulo').innerText = "Identidade Secreta";
        document.getElementById('sc_Joao_nome').innerText = "Peter Parker (Homem-Aranha)";
        document.getElementById('sc_Joao_idade').innerText = "18 anos";
        foto.src = "fotos/homem aranha.webp";
        document.getElementById('sc_Joao_bio').innerText = "Amigão da vizinhança. Com grandes poderes vêm grandes responsabilidades!";
        document.getElementById('sc_Joao_hobby').innerText = "Fotografia e Ciência";
        document.getElementById('sc_Joao_comida').innerText = "Torta da Tia May";
        document.getElementById('sc_Joao_extra1').innerText = "Sentido Aranha Ativado";
        document.getElementById('sc_Joao_extra2').innerText = "Inimigo: Duende Verde";

        // Altera o tema visual manipulando classes do CSS
        body.classList.replace('sc_Joao_modo_civil', 'sc_Joao_modo_heroi');
        btn.innerText = "Revelar Identidade Real";
        sc_Joao_estado = true;

    } else {
        // --- VOLTANDO PARA JOAO ---
        document.getElementById('sc_Joao_titulo').innerText = "Identidade Civil";
        document.getElementById('sc_Joao_nome').innerText = "Joao Victor";
        document.getElementById('sc_Joao_idade').innerText = "22 Anos";
        foto.src = "fotos/avatar.webp";
        
        document.getElementById('sc_Joao_bio').innerText = "Estudante de Desenvolvimento Web focado em aprender novas tecnologias.";
        document.getElementById('sc_Joao_hobby').innerText = "Programar e Jogar";
        document.getElementById('sc_Joao_comida').innerText = "Pizza";
        document.getElementById('sc_Joao_extra1').innerText = "Torcedor do meu time do coração.";
        document.getElementById('sc_Joao_extra2').innerText = "Adoro resolver desafios de lógica.";

        // Retorna ao tema civil
        body.classList.replace('sc_Joao_modo_heroi', 'sc_Joao_modo_civil');
        btn.innerText = "Transformar!";
        sc_Joao_estado = false;
    }
}