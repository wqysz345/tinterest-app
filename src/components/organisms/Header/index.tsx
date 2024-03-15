import {HeaderProfile} from "../../molecules/Header/Profile";
import {HeaderActions} from "../../molecules/Header/Actions";
import {HeaderSearchBar} from "../../molecules/Header/SearchBar";

export const HeaderOrganism = () => {
    return (
        <header className="grid grid-cols-12 max-w-screen-xl mx-auto gap-12 pt-8 pb-12">
            <div className="col-span-4">
                <HeaderProfile />
            </div>

            <div className="col-span-8 flex items-center space-x-4">
                <HeaderSearchBar />
                <HeaderActions />
            </div>
        </header>
    )
}