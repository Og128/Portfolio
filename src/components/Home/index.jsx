import Mecard from '../Mecard';
import Title from '../Title';
import './styles.css'

function Home (){
    return(
        <>
        <Title />
        <div className="home-container">
            <p className="home-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis adipisci reiciendis incidunt ratione enim quaerat 
                voluptatem suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolores ut reprehenderit veniam animi! Distinctio vitae, eligendi provident fugiat nesciunt unde voluptates ratione quod autem expedita, voluptatum, iste quos ad! Voluptates ut fugiat quam totam dolores.
            </p>
            <div className="do-container">
                <h3 className="do-title">Who I am!</h3>
                <div className="do-grid">
                    <Mecard />
                    <Mecard />
                    <Mecard />
                    <Mecard />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;