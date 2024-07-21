export default function Card(props) {
    return(
        /* 
        suggestion blocks
        */
        <div className="card">
            <h1 className="top-rated--title">{props.cardTitle}</h1>

            <div className="card--body">
                
                {
                    /*
                     * first off i hate jsx comments
                     * individual restaurants pulled from api
                     * */ 

                }

                <div className="restaurant--info">
                    <img className="restaurant--logo" alt="logo" src={props.resLogo}/>
                    <div className="restaurant--details">
                        <p>{props.restaurantTitle}</p>
                        <p>{props.rating} * {props.cuisine} * {props.cost}</p>
                        <p>{props.location}</p>
                    </div>
                </div>
{/* 
                <div className="restaurant--info">
                    <img className="restaurant--logo" alt="logo" src={props.resLogo}/>
                    <div className="restaurant--details">
                        <p>restaurant title</p>
                        <p>restaurant rating / cuisine / cost</p>
                        <p>restaurant location</p>
                    </div>
                </div>
                <div className="restaurant--info">
                    <img className="restaurant--logo" alt="logo" src={props.resLogo}/>
                    <div className="restaurant--details">
                        <p>restaurant title</p>
                        <p>restaurant rating / cuisine / cost</p>
                        <p>restaurant location</p>
                    </div>
                </div>
                <div className="restaurant--info">
                    <img className="restaurant--logo" alt="logo" src={props.resLogo}/>
                    <div className="restaurant--details">
                        <p>restaurant title</p>
                        <p>restaurant rating / cuisine / cost</p>
                        <p>restaurant location</p>
                    </div>
                </div>
                <div className="restaurant--info">
                    <img className="restaurant--logo" alt="logo" src={props.resLogo}/>
                    <div className="restaurant--details">
                        <p>restaurant title</p>
                        <p>restaurant rating / cuisine / cost</p>
                        <p>restaurant location</p>
                    </div>
                </div>
                 */}
            </div>
        </div>
    )
}