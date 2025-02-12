import Header from '../components/Header';
import CardEmoji from '../components/CardEmoji';

const Home = () => {
    return (
        <div className={"flex flex-col bg-secondary-900 text-white "}>
            <div className="m-8 flex flex-col gap-8">
                <Header title={"Portfolio"} subtitle={"Développeur web passionné, je crée des interfaces modernes et performantes en alliant design et technicité."} className={""} />
                <h2 className='text-3xl text-center'>Mon Approche et Mes Engagements</h2>
                <div className={"flex"}>
                    <p className="text-xl leading-relaxed text-gray-200 p-16">
                        Tout a commencé par une simple envie : <span className="font-medium">construire</span>, <span className="font-medium">expérimenter</span> et <span className="font-medium">repousser les limites</span> du web.
                        Passionné par le développement depuis la fin de mon BTS, j’ai alors commencé à créer des interfaces <span className="font-medium">fluides</span> et <span className="font-medium">modernes</span>, où <span className="italic">design</span> et <span className="italic">performance</span> se rencontrent.
                        <br /><br />
                        Chaque ligne de code est pour moi une opportunité d’<span className="font-medium">innover</span>, d’<span className="font-medium">optimiser</span> et d’apporter des solutions à des problèmes plus ou moins complexes.
                        <br /><br />
                        <span className="font-medium">Bienvenue dans mon univers</span>, où chaque projet est un <span className="font-medium">challenge</span> et chaque idée mérite d’être <span className="font-medium">explorée</span>.
                    </p>
                    <div className={"grid grid-cols-2 gap-8 min-w-fit"}>
                        <CardEmoji title={"Innovation"} description={"Je conçois des solutions uniques, adaptées aux besoins des clients, pour créer des expériences inédites."} emoji={"🚀"} />
                        <CardEmoji title={"Collaboration"} description={"Je conçois des solutions uniques, adaptées aux besoins des clients, pour créer des expériences inédites."} emoji={"🤝"} />
                        <CardEmoji title={"Accessibilité UX/UI"} description={"Je conçois des solutions uniques, adaptées aux besoins des clients, pour créer des expériences inédites."} emoji={"👁️‍🗨️"} />
                        <CardEmoji title={"SEO et visibilité"} description={"Je conçois des solutions uniques, adaptées aux besoins des clients, pour créer des expériences inédites."} emoji={"📊"} />
                        <div></div>
                        <CardEmoji title={"Impact"} description={"Je conçois des solutions uniques, adaptées aux besoins des clients, pour créer des expériences inédites."} emoji={"📈"} />
                    </div>
                    <h2 className='text-3xl text-center'>Expertises et Savoir-Faire</h2>
                    

                    {/*<div className={"grid grid-cols-2 gap-8 min-w-fit"}>
                            <Card title={"React"} description={"Le framework React est essentiel pour le développement front-end"} Icon={ReactIcon} />
                            <Card title={"SpringBoot"} description={"Le framework Spring Boot est incontournable pour le développement back-end"} Icon={SpringBootIcon} />
                        </div>*/}
                </div>
            </div>
        </div>
    )
}
export default Home;