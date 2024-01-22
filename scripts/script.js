function MudarTema() {
    // Obtenha a referência do checkbox
    var checkbox = document.getElementById('id-checkbox');

    // Obtenha o elemento <style> que contém as variáveis CSS
    var styleElement = document.querySelector('#styles');

    // Armazene as configurações padrão antes de realizar alterações
    var configuracoesPadrao = {
        corFundo: "#212121",
        corFonte: "#FFFFFF",
        corDestaque: "#22D4FD",,.
        githubSrc: "assets/icone-github-branco.png",
        linkedinSrc: "assets/icone-linkedin-branco.png",
        emailSrc: "assets/icone-email-branco.png",
        iconeInicialSrc: "assets/icone-nome-branco.png"
    };

    // Obtenha as referências das imagens
    var githubIcon = document.querySelector('.header_icons_icons.github');
    var linkedinIcon = document.querySelector('.header_icons_icons.linkedin');
    var emailIcon = document.querySelector('.header_icons_icons.email');
    var iconeInicial = document.querySelector('.header_icons_icons.icone_inicial');

    // Defina os novos valores para as variáveis se o checkbox estiver marcado
    if (checkbox.checked) {
        // Altere os valores se o checkbox estiver marcado
        styleElement.innerHTML = `:root {
            --cor-fundo: "#81B6B0";
            --cor-fonte: "#212121";
            --cor-destaque: "#22D4FD";
        }`;

        // Altere os src das imagens
        githubIcon.src = "assets/icone-github-preto.png";
        linkedinIcon.src = "assets/icone-linkedin-preto.png";
        emailIcon.src = "assets/icone-email-preto.png";
        iconeInicial.src = "assets/icone-nome-preto.png";
    } else {
        // Restaure as configurações padrão se o checkbox NÃO estiver marcado
        styleElement.innerHTML = `:root {
            --cor-fundo: ${configuracoesPadrao.corFundo};
            --cor-fonte: ${configuracoesPadrao.corFonte};
            --cor-destaque: ${configuracoesPadrao.corDestaque};
        }`;

        // Restaure os src das imagens
        githubIcon.src = configuracoesPadrao.githubSrc;
        linkedinIcon.src = configuracoesPadrao.linkedinSrc;
        emailIcon.src = configuracoesPadrao.emailSrc;
        iconeInicial.src = configuracoesPadrao.iconeInicialSrc;
    }
}
