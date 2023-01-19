import React, { useState } from "react";

const AddNewSubadmin = () => {
    const [group, setGroup] = useState("");
    const Change = (e) => {
        setGroup(e.target.value);
    }
    // useState
    return (
        <>
            <div className="container">
                <div style={{ backgroundColor: "Yellow", marginTop: "3%" }}>
                    <h3>Add new user</h3>
                </div>
                <div>
                    <form>
                        <div style={{margin:"2%"}}>
                            <label htmlFor="">Enter Your Name: </label>
                            <input type="text" style={{position:"absolute",right:"50%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">User Name: </label>
                            <input type="text" style={{position:"absolute",right:"50%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label style={{ marginRight: "27%" }} htmlFor="">Group: </label>
                            <input type="radio" name="group" onChange={Change}></input>
                            <label style={{ marginRight: "3%" }} htmlFor="">ABC</label>
                            <input type="radio" name="group" onChange={Change}></input>
                            <label htmlFor="">Ab</label>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">Email Adress: </label>
                            <input type="email" style={{position:"absolute",right:"50%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">User Image: </label>
                            <input type="file" style={{position:"absolute",right:"38%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">Status: </label>
                            <input type="text" style={{position:"absolute",right:"50%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">Offline User: </label>
                            <input type="radio" style={{position:"absolute",right:"63%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">Forniture Cart Status : </label>
                            <input type="radio" style={{position:"absolute",right:"63%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">Is OMS User: </label>
                            <input type="radio" style={{position:"absolute",right:"63%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">OMS Vendors: </label>
                            <input type="text" style={{position:"absolute",right:"50%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">GST No. : </label>
                            <input type="text" style={{position:"absolute",right:"50%"}}></input>
                        </div>
                        <div style={{ margin: "2%" }}>
                            <label htmlFor="">OSM User Address: </label>
                            <input type="text" style={{position:"absolute",right:"50%"}}></input>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default AddNewSubadmin;