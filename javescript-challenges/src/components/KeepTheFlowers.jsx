import React from "react";

export default function KeepTheFlowers() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, []);
    
    function filterFlowers(flowersData) {
        const flowers = flowersData.filter(item => 
            item.group === "plant flower" || item.group === "animal bug"
        );
        return (
                <>
                    <p>These are the flowers kept from the data:</p>

                    <ul>
                        {flowers.map((item, index) => (
                            <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item.htmlCode[0] }} />
                                {" "}
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </>
            )
    }
    
    const [result, setResult] = React.useState([]);
    
    return(
        <div className="keep-the-flowers-game">
            <p>Here is the flowers data:</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={() => 
                setResult(filterFlowers(data))}>
                Keep the Flowers
            </button>
            <div style={{marginTop:"20px"}}>
                {result}
            </div>
        </div>
    )
}