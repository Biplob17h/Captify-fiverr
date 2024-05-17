/* eslint-disable react/prop-types */

const Tickets = ({show}) => {
    return (
        <div className={`${show === "tickets" ? "" : "hidden"}`}>
            <h1>Tickets</h1>
        </div>
    );
};

export default Tickets;