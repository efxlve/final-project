import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ filteredData }) => (
    <div className='card-list'>
        {
            filteredData.map((data) => {
                return <Card key={data.id} data={data}/>;
            })
        }
    </div>
);

export default CardList;