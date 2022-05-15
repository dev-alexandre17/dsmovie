import axios from "axios";
import Pagination from "components/Pagination";
import PixelCard from "components/PixelCard";
import { useEffect, useState } from "react";
import { PixelPage } from "types/pixel";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<PixelPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/pixelarts?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as PixelPage;
                setPage(data);
            });
    }, [pageNumber]);

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(pixel => (
                        <div key={pixel.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <PixelCard pixel={pixel} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Listing;