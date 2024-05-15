/* eslint-disable react/prop-types */

const HomePage = ({show}) => {
    return (
        <div className={`${show === "home" ? "" : "hidden"}`}>
            <h1>Homepage</h1>
        </div>
    );
};

export default HomePage;