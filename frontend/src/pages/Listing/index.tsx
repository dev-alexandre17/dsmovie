import axios from "axios";
import Pagination from "components/Pagination";
import PixelCard from "components/PixelCard";
import { useEffect, useState } from "react";
import { PixelPage } from "types/pixel";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/pixelarts?size=12&page=0`)
        .then(response => {
            const data = response.data as PixelPage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []);
    
    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <PixelCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <PixelCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <PixelCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <PixelCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <PixelCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing;