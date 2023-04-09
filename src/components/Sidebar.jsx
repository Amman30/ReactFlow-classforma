import React, { useState, useEffect } from "react";
import "./sidebar.css"

const SideBar = () => {
    const [modules, setModules] = useState([]);
    const [currentpage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=${currentpage}&limit=5`)
            .then(async (response) => await response.json())
            .then((data) => setModules(data))
            .catch((error) => {
                console.log(error);
            });
        setLoading(false);
    }, [currentpage]);

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    };

    const nextPage = () => {
        setCurrentPage(currentpage + 1);
    };
    const prevPage = () => {
        setCurrentPage(currentpage - 1);
    };

    return loading ? <div>loading....</div> : (
        <aside>
            <div className="module_data_container">
                <div className="data_list">
                    {modules.map((module) => (
                        <div className="module_data" key={module.id}>
                            <div className="dnd_input">{module.input_type}</div>
                            <div
                                className="module_name"
                                onDragStart={(event) => onDragStart(event, "input")}
                                draggable
                            >
                                <div>{module.name}</div>
                            </div>
                            <div className="dnd_output">
                                {module.output_type}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination-container">
                    <div className="pagination">
                        <button className="pagination_button" onClick={prevPage} disabled={currentpage === 1} >
                            Pervious
                        </button>
                        <span className="pagination_page">Page {currentpage} of 20</span>
                        <button className="pagination_button" onClick={nextPage} disabled={currentpage === 20}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
