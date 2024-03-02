import style from './About.module.css';

const About = () => {

    return (
        <div className={style.container}>
            <div className={style.first_container}>
            <h1>About</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci fugit sunt tempore veritatis, id iure enim maxime maiores quod magni cum modi sint ratione! Molestias minus ipsum sit rerum.</p>
            </div>
            <div className={style.second_container}>
            <h2>¡Contact Me!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio impedit laborum quo beatae expedita? Ea error incidunt ex deleniti quod recusandae, ullam corporis! Voluptas vitae officia veniam. Veritatis, quibusdam distinctio.</p>
            </div>
        </div>
    )
};

export default About;