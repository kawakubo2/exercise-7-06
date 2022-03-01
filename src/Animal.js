import AnimalDetails from "./AnimalDetail";
import Photo from "./Photo";
import WrappedComponent from "./WrappedComponent";

const Animal = props => {
    const details = props.details;
    return (
        <div>
            {props.children}
            <ul>
                {details.map((detail, index) => (
                    <WrappedComponent
                        key={index}
                        donationAmount={detail.donation}
                        render={({ donationColor }) => (
                            <AnimalDetails 
                                donationColor={donationColor}
                                image={<Photo path={detail.photo} title={detail.name} />}
                                detail={detail} 
                                key={index} />
                        )}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Animal;