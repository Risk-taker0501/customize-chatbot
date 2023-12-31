import React from "react";
import "./control-panel.css";

const ControlPanel = (props) => {
    const { hasSaved, saveState, loadState } = props;
    const renderLoadButton = () => {
        if (hasSaved) {
            return (
                <button className="ControlPanel-Button ControlPanel-Button_load" 
                  onClick={loadState}>
                    Load
                </button>
            );
        }
        return null;
    }

    return (
        <div className="ControlPanel">
            <button className="ControlPanel-Button ControlPanel-Button_save"  style={{backgroundColor:"gray", color:"white"}}
              onClick={saveState}>
                Test with Chatbot!
            </button>
            { renderLoadButton() }
        </div>
    );

}

export default ControlPanel;