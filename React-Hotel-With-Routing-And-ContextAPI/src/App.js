import {AllRoutes} from "./Routes/AllRoutes";
import {AuthContextProvider} from "./Context/AuthContext";

export const App=()=> {
	// DO NOT CHANGE/MODIFY this app-structure here
	return (
		<div data-testid="users-app">
		<AuthContextProvider>
		<AllRoutes/>
		</AuthContextProvider>
		</div>
	);
}
