export const HeaderProfile = () => {
    return (
        <div className="flex items-center space-x-6">
            <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="Profile"
                 className="w-10 h-10 rounded-full"/>
            <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-500 text-sm">Software Engineer</p>
            </div>
        </div>
    )
}