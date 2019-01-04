import MasterPage from '../componentes/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../componentes/Precio';
import Noticias from '../componentes/Noticias';

const Index = (props) => (
   <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                <Precio 
                    precio={props.precioBitcoin}
                />
            </div>

            <div className="col-md-8">
                <h2>Noticias sobre el Bitcoin</h2>
                    <Noticias 
                        noticias={props.noticias}
                    />
            </div>

            <div className="col-md-4">
                <h2>Próximos Eventos Bitcoin</h2>
            </div>
        </div>
   </MasterPage>
)

Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-04&sortBy=publishedAt&apiKey=d539c47efc784013a19afeb5a34ab049&language=es');

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();

    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias : resNoticias.articles
    }
}

export default Index;