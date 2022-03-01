const AnimalDetails = props => {
    const { name, number, endangered, donation } = props.detail;

    return (
        <li key={props.index}>
            <div>
                <p>{props.image}</p>
                <p>Animal: {name}</p>
                <p>Number: {number}</p>
                <p>Endangered: {endangered ? 'Yes': 'No'}</p>
                <p style={{ color: props.donationColor }}>Donation amount: ${donation}</p>
            </div>
        </li>
    );
};

export default AnimalDetails;