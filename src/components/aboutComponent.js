import React from "react";
import "../styles/about.css"
import "../styles/all.css"
import Grid from '@mui/material/Grid';

function AboutComponent(props) {
    const members = props.members;

    return (
        <div>
            <Grid container spacing={0} justifyContent="center">

                <Grid sm={12} md={8} style={{ padding: "0% 5% 1% 5%" }}>
                    <h1 className="header-about">{props.subteam} Team</h1>
                    <p className="paragraph-about padding-bottom-about">{props.about}</p>
                </Grid>

                <Grid xs={4}>

                </Grid>
            </Grid>

            <Grid container spacing={3} alignItems="center" justifyContent="center">
                
                    {members.map((item) => ( //this is for current members
                    item.field_current_member &&
                    <div>
                        <div class="hex">
                            <div class="hex-background">
                                <img src={"https://empathybytes.library.gatech.edu" + item.relationships.field_pfp.uri.url} alt="person"></img>
                                <p className="paragraph-about">{item.title}</p>
                                <p className="paragraph-about">{item.title}</p>
                            </div>
                        </div>
                        <div className="center-text">
                            <p className="paragraph-about">{item.title}</p>
                        </div>
                    </div>
                        
                ))}
                
            </Grid>

            <h3 style={{textAlign:"center", color:"white", padding:"1rem 0", fontSize:"3vw"}}>Past Members</h3>

            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {members.map((item) => ( //this is for alumni
                    !item.field_current_member &&
                    <div>
                            <div class="hex">
                                <div class="hex-background">
                                    <img src={"https://empathybytes.library.gatech.edu" + item.relationships.field_pfp.uri.url} alt="person"></img>
                                    <p className="paragraph-about">{item.title}</p>
                                    <p className="paragraph-about">{item.title}</p>
                                </div>
                            </div>
                            <div className="center-text">
                                <p className="paragraph-about">{item.title}</p>
                            </div>
                        </div>
                ))}
            </Grid>
        </div>
    );
}

export default AboutComponent;