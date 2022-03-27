import {createContext} from "react";


export default function AppProvider({children, initialData}) {
    const AppContext = createContext();

    return (
        <AppContext.Provider value={initialData}>
            {children}
        </AppContext.Provider>
    );
}

