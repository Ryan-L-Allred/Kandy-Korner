import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductList } from "../products/ProductList"
export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>We are Kandy Korner</h1>

					<Outlet />
				</>
			}>

				<Route path="locations" element={ <LocationList />} />
				<Route path="products" element={ <ProductList />} />
			</Route>
		</Routes>
	)
}

