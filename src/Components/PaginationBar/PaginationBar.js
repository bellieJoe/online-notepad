import "./PaginationBar.scss";

export const Navigator = (props) => {
    
    return (
        <button className="Navigator">
            {
                props.type == "previous" ? 
                <span><i className="fa-solid fa-backward"></i>  Prev</span> :  
                <span>Next   <i className="fa-solid fa-forward"></i></span>
            }
        </button>
    );
}

export const Page = (props) => {
    return (
        <button className={`Page ${props.active && "active"}`}>
            {props.label}
        </ button>
    );
}

const PaginationBar = (props) => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11]
    return (
        <div className="PaginationBar">
            <Navigator type="previous"  />
            {
                pages.map(val => {
                    if(val == 3){
                        return <Page label={val} active={true} key={val} />
                    }
                    return <Page label={val} key={val} />
                })
            }
            
            <Navigator type="next" />
        </div>
    );
}

export default PaginationBar;
