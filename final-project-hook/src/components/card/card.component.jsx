import './card.styles.css';

const Card = ({ data }) => {
    const { first_name, last_name, email, avatar } = data;

    return (

            <div className='card-container'>
                <img
                    alt={`${first_name} ${last_name}`}
                    src={`${avatar}`}
                />
                <h2>{first_name} {last_name}</h2>
                <p>{email}</p>
            </div>

    );
};

export default Card;