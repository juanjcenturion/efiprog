import Banner from "../components/banner/Banner"
import Features from "../components/features/Features"
import Categories from "../components/categories/Categories"
import Arrivals from "../components/arrivals/Arrivals"
import Ads from "../components/ads/Ads"


export default function Home () {
    return (
        <div>
            <Banner/>
            <Features/>
            <Categories/>
            <Arrivals/>
            <Ads/>
        </div>
    )
}