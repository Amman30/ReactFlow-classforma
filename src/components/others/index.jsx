import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WorkFlow from "../WorkFlow/index"
import "./index.css"

function Names() {
    const params = useParams();
    const [getName, setgetNames] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${params.id}`)
            .then(async (response) => await response.json())
            .then((data) => setgetNames(data))
            .catch((error) => console.log(error));
        setLoading(false);
    }, [params.id]);


    return loading ? <div>Loading...</div> : (
        <div>
            <nav className="workflow-name">Wokflow name : {getName.name}</nav>
            <WorkFlow />
        </div>
    );
}

export default Names;
