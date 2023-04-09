import React from "react";
import SideBar from "../Sidebar"
import FlowComponent from "../FlowComponent/index"

const WorkFlow = () => {
    return (
        <>
            <div className="modules_canvas_container">
                <div className="modules_container">
                    <div className="title"></div>
                    <SideBar />
                </div>
                <FlowComponent />
            </div>
        </>
    );
};

export default WorkFlow;
