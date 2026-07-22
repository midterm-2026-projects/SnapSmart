import "./PackageCard.css";


function PackageCard({
    title,
    image,
    description
}){


    return (

        <div className="package-card">


            <img
                src={image}
                alt={title}
            />


            <h3>
                {title}
            </h3>


            <p>
                {description}
            </p>


            <button>
                View Package
            </button>


        </div>

    );


}


export default PackageCard;