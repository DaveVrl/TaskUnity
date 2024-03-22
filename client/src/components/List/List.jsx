import Card from "../Card/Card";

const List = ({ title , cards}) => {

    return (
        <>
        <h1>{title}</h1>
        {cards?.map(({ id ,title }) => {
            return(
                <Card
                key={id}
                title={title}
                />
            )
        })}
        <button>New Task</button>
        </>
    )
};

export default List;