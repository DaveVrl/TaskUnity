import List from "../List/List";

const Board = ({title , lists}) => {

    return (
        <>
        <h1>{title}</h1>
        {
            lists?.map(({ id,title }) => {
                return(
                    <List
                    key={id}
                    title={title}
                    />                    
                )
            })
        }
        <button>New List</button>
        </>
    )
};

export default Board;