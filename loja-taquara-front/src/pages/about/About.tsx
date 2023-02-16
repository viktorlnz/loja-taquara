export default function(){

    const calcAge = (birthYear:number, birthMonth: number):number =>{
        const date = new Date();

        let years = date.getFullYear() - birthYear - 1;

        years += birthMonth - (date.getMonth() + 1) <= 0 ? 1 : 0;

        return years;
    }

    return (
        <article className="about">
            <h2 className="about__title">Sobre Nós</h2>
            <p className="about__paragraph">Bem, para começar, não se trata de <b>sobre nós</b>, 
            está mais para um <b>sobre mim</b>, porque essa não é uma página real de vendas, mas sim
            uma página de prática em React.js com typescript que vai ter back-end em PHP com Laravel.</p>
            
            <h3 className="about__subtitle">Sobre Mim</h3>
            <p className="about__paragraph">Meu nome é <em>Viktor Lenz</em>, tenho {calcAge(1998, 6)} anos, comecei a 
            aprender programação desde os 17 anos, iniciando no curso técnico do <em>Senai</em>, com um pouco de C e depois
            Java, terminei o curso aprendendo por conta própria PHP, mas não suficiente comecei a faculdade em seguida.</p>
            <p className="about__paragraph">Após começar a faculdade, comecei a estudar um pouco de tudo, Node.js, Python 3,
            até um pouco de C#, aprendi de tudo um pouco, mas faltou aprofundamento. Mas eu continuei, e até hoje acabo aprendendo 
            mais. Hoje em dia tenhos conhecimentos mais focados em Front-end, conheço Angular, React.js (inclusive usado nesse site), SASS, um pouco de Less(prefiro SASS),
            mas claro, também sei bak-end, principalmente em PHP, trabalho com a mini framework Slim mas vou optar por melhorar meu 
            trabalho usando Laravel. Também tenho noções de Spring Boot, caso eu queira migrar de linguagem já estou meio caminho andado.</p>
            <h3 className="about_subtitle">Contate-me</h3>
            <p className="about__paragraph">
                <b>NÃO</b> adianta usar o contato dessa página, ele está lá apenas para fins demonstrativos, tem uma maneira melhor de me 
                contatar, acesse o meu LinkedIn:
            </p>
            <a href="https://www.linkedin.com/in/viktor-lenz-7110b423a/" target={"_blank"} className="about__linkedin">LinkedIn</a>
        </article>
    )
}