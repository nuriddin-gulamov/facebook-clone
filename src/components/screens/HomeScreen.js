import Header from "../header/Header";
import Main from "../main/Main";

function HomeScreen() {
    return <div className="min-h-[100vh] bg-gray-100 dark:bg-dark-300">
        <Header />
        <div className="2xl:container"><Main /></div>
    </div>;
}

export default HomeScreen;
