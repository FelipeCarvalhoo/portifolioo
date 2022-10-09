let u = document.querySelector('.mmenu');
let u1 = document.querySelector('.new-window');
let telaInformacao = document.querySelector('.new-window');
let footer = document.querySelector('footer');
//imagens
let primeiroStatus = document.querySelector('.new-window .status1');
let imagem1 = document.querySelector('.image1');
let imagem2 = document.querySelector('.image2');
let imagem3 = document.querySelector('.image3');
let imagem4 = document.querySelector('.image4');
let imagem5 = document.querySelector('.image5');

voltar()

function menuu() {
    u.style.display = 'flex';
}
function voltar() {
    u.style.display = 'none';
    u1.style.display = 'none';
}
function menuToReturn() {
    voltar();
}
//pegar 
let howIam = document.querySelector('.image1');
function nova_tela1() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.color = 'black';
    howIam.style.display = 'flex';
    imagem1.style.display = 'flex';


    document.querySelector('.status1 .titulo').innerHTML = 'Quem sou?'
    document.querySelector('.first-paragraph').innerHTML = "Ola, me nome e Felipe, moro em Palmas, tocantins. Estudo desenvolvimento front-end, sou apaixonado por tecnologia, meu sonho e tornar-me um programador full-stack completo. Sempre tive o desejo de ser uma pessoa colaborativa, tenho grande desejo de ajudar as pessoas, vi na tecnologia essa oportunidade, a tecnologia e uma poderosa ferramenta que pode beneficiar todas as pessoas do mundo, acredito que ela nunca deixara de ser aprimorada, meu desejo e usar meus conhecimentos para beneficiar a comunidade, empresas e qualquer tipo de instituição com o desenvolvimento de sites, aplicativos ou sistemas."
}

function nova_tela2() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.display = 'none';
    howIam.style.display = 'none';
    imagem2.style.display = 'flex';


    document.querySelector('.status1 .titulo').innerHTML = 'O que faz um programador?'
    document.querySelector('.status1 .first-paragraph').innerHTML = 'O programador trabalha com o desenvolvimento de programas de computador, celular ou outros equipamentos tecnológicos. Por meio de comandos e códigos eles desenvolvem funções de aplicativos, videogames e computadores, a depender de sua área de atuação. É fundamental, portanto, que o programador entenda linguagens como html, java, javascrip, CSS, SQL, dentre outras. <ul>Veja a seguir os principais tipos de programador: <li>Programador web: desenvolve sites e páginas da internet</li> <li>Programador desktop: desenvolve aplicativos e programas para computadores desktop</li> <li>Programador mobile: trabalha na formação de aplicativos para celulares e tablets</li> <li>Programador games: atua na programação de jogos eletrônicos para tablets, celulares, playstation e computadores</li> <li>Programador executivo: coordena o processo de desenvolvimento de programas </li></ul>';
}
function nova_tela3() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.display = 'none';
    howIam.style.display = 'none';
    imagem3.style.display = 'flex';

    document.querySelector('.status1 .titulo').innerHTML = 'Quais os desafios da área?'


}
function nova_tela4() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.display = 'none';
    howIam.style.display = 'none';
    imagem4.style.display = 'flex';

    document.querySelector('.status1 .titulo').innerHTML = 'O que faz um programador?'



}
function nova_tela5() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.display = 'none';
    howIam.style.display = 'none';
    imagem5.style.display = 'flex';

    document.querySelector('.status1 .titulo').innerHTML = 'Meus planos para o futuro?'


}
function nova_tela() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.color = 'black';
    howIam.style.display = 'flex';

}
function image1(nova_tela) {
    let howIam = document.querySelector('.image1');
}