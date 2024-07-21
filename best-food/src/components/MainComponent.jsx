import Card from "./Card";
import testLogo from '../assets/company-logo.png'
import { SearchBar } from "./SearchBar";


export default function MainComponent(props) {
    return(
        <main className="food-body">
            <h1>
                This is the body where we shall put all the good food
            </h1>
            <div className="search-bar--container">
                <SearchBar />
                <div>SearchResults</div>
            </div>
            <div className="suggestion--cards">
                <Card 
                    resLogo={testLogo}
                    cardTitle="Best Rated"
                    restaurantTitle="New Ho King"
                    rating="4.5 (2k)"
                    cuisine="Chinese"
                    cost="$$"
                    location="Toronto" 
                />
                <Card 
                    resLogo={testLogo}
                    cardTitle="Newly Added"
                    restaurantTitle="New Ho King"
                    rating="4.5 (2k)"
                    cuisine="Chinese"
                    cost="$$"
                    location="Toronto" 
                />
                <Card 
                    resLogo={testLogo}
                    cardTitle="Hidden Gems"
                    restaurantTitle="New Ho King"
                    rating="4.5 (2k)"
                    cuisine="Chinese"
                    cost="$$"
                    location="Toronto" 
                />
            </div>
            
        </main>
    )
}