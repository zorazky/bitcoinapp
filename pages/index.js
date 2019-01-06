import MasterPage from '../componentes/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../componentes/Precio';
import Noticias from '../componentes/Noticias';
import Eventos from '../componentes/Eventos';

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
                <Eventos 
                    eventos={props.eventos}
                />
            </div>
        </div>
   </MasterPage>
)

Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=d539c47efc784013a19afeb5a34ab049&language=es');
    const eventos = await fetch ('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=FCNSHJ7RZAMWESN4UMNE');
    
    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();

    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias : resNoticias.articles,
        eventos : resEventos.events
    }
}

export default Index;