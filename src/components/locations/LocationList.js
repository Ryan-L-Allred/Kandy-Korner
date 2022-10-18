import { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationArray)=> {
                setLocations(locationArray)
            }) 
        },
        []
    )

    return <>
        <h2>List of Locations</h2>

        <article className="locations">
            {
                locations.map(
                    (location) => {
                        return <section className="location">
                            <ul>
                                <li>{location.address}</li>
                                <li>Square Footage: {location.squareFootage}</li>

                            </ul>
                        </section>
                    }
                )
            }
        </article>
    </>
}