import MasterPage from '../componentes/Master';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
   <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                {console.log(props)}
            </div>

            <div className="col-md-8">
                <h2>Noticias sobre el Bitcoin</h2>
            </div>

            <div className="col-md-4">
                <h2>Próximos Eventos Bitcoin</h2>
            </div>
        </div>
   </MasterPage>
)

Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');

    const resPrecio = await precio.json();

    return {
        precioBitcoin: resPrecio.data.quotes.USD
    }
}

export default Index;