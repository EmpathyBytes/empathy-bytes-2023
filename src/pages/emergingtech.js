// This page contains all the information about the emerging tech team... 3D model implementation is also done at the end of this page. - Jacob

import React from "react";
import Layout from "../components/layout";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import BuzzPlaque from "../components/canvas/buzzplaque";
import Football from "../components/canvas/football";
import Sweater from "../components/canvas/tSweater";
import Converse from "../components/canvas/rightconverse";

import Grid from '@mui/material/Unstable_Grid2';


import "../styles/experiencesIndividual.css"
import "../styles/all.css"


function EmergingTech() {
    return(
        <Layout>
            <div className="full-container-experiences">
                <Grid container spacing={2} className="">
                    <div className="grid-margins-experiences">
                        <Grid xs={12}>
                            <h1 className="header-experiences">The Emerging Technologies Team</h1>
                        </Grid>
                    </div>
                </Grid>


                <Grid container spacing={0} className="bg-1">
                    <div className="grid-margins-experiences">
                        <Grid xs={10}>
                            <h1 className="sub-header-experiences">What We Do</h1>
                        </Grid>

                        <Grid xs={2}>
                            
                        </Grid>

                        <Grid xs={7}>
                            <p className="paragraph-experiences paragraph-indent-experiences-left">
                            Our team develops Virtual and Augmented Reality experiences with the goal of fostering empathy and understanding. 
                            Through the use of 3D technologies, we aim to preserve communities and their artifacts, giving others the chance 
                            to see and learn more about them.
                            </p>
                        </Grid>

                        <Grid xs={5}>
                            
                        </Grid>
                    </div>
                </Grid>

                <Grid container spacing={0} className="">
                    <div className="grid-margins-experiences">

                        <Grid xs={12} className="right-align-experiences">
                            <h1 className="sub-header-experiences">The VR Archives</h1>
                        </Grid>


                        <Grid xs={12}>
                            <p className="paragraph-experiences paragraph-indent-experiences-left">Empathy Bytes is developing a 
                            Virtual Reality Museum where anyone can experience and learn about artifacts in the Georgia Tech Archives.
                            Our team is able digitally preserve items such as an official 1996 Atlanta Olympics Torch, Buzz’s Converses 
                            from 1988, and a 1937 rat cap through the use of photogrammetry and hand-modeling techniques. We hope this VR experience 
                            allows the Georgia Tech Community to strengthen its connection to the school’s past and safely preserve these memories.
                            </p>
                            <p className="paragraph-experiences paragraph-indent-experiences-left">Please click and drag the 3D models below to see
                                in 360 degree view.
                            </p>
                        </Grid>
                    </div>

                </Grid>

                <Grid container spacing={4} className="bg-1">
                    
                    <Grid xs={6} container className="" alignItems="center" justifyContent="center" direction="column">
                        <h1>Buzz's Plaque</h1>
                    </Grid>

                    <Grid xs={6} container className="" alignItems="center" justifyContent="center" direction="column">
                        <h1>Buzz's Right Converse</h1>
                    </Grid>

                    <Grid xs={6} container className="" alignItems="center" justifyContent="center" direction="column">
                        <h1>Sweater</h1>
                    </Grid>

                    <Grid xs={6} container className="" alignItems="center" justifyContent="center" direction="column">
                        <h1>Football</h1>
                    </Grid>

                

                    {/* Loading 3D Models */}
                    <Grid xs={6} className="vr-container-1 b-1">
                        {/* I would recommend following this structure for importing future models - Jacob */}
                        <Canvas>
                            <Suspense>
                                <BuzzPlaque scale={3.5} />

                                {/*PLEASE READ (6/10/2023)
                                    There is a compatibility issue with this Environment component and the new version of three.js, I think it should be resolved soon though.
                                    For now, I have inlcuded an ambientLight component instead. When this issue is resolved, feel free to add the Environment component back in.
                                - Jacob Amin */}

                                {/* <Environment /> */}
                                <ambientLight />
                                <OrbitControls />
                            </Suspense>
                        </Canvas>
                    </Grid>

                        <Grid xs={6} className="vr-container-1 b-2">
                            <Canvas>
                                <Suspense>
                                    <Converse scale={6} />

                                    {/*PLEASE READ (6/10/2023)
                                        There is a compatibility issue with this Environment component and the new version of three.js, I think it should be resolved soon though.
                                        For now, I have inlcuded an ambientLight component instead. When this issue is resolved, feel free to add the Environment component back in.
                                    - Jacob Amin */}

                                    {/* <Environment /> */}
                                    <ambientLight />
                                    <OrbitControls />
                                </Suspense>
                            </Canvas>
                        </Grid>

                        <Grid xs={6} className="vr-container-1 b-3">
                            <Canvas>
                                <Suspense>
                                    <Sweater scale={3} />

                                    {/*PLEASE READ (6/10/2023)
                                        There is a compatibility issue with this Environment component and the new version of three.js, I think it should be resolved soon though.
                                        For now, I have inlcuded an ambientLight component instead. When this issue is resolved, feel free to add the Environment component back in.
                                    - Jacob Amin */}

                                    {/* <Environment /> */}
                                    <ambientLight />
                                    <OrbitControls />
                                </Suspense>
                            </Canvas>
                        </Grid>

                        <Grid xs={6} className="vr-container-1 b-4">
                            <Canvas>
                                <Suspense>
                                    <Football scale={3} />

                                    {/*PLEASE READ (6/10/2023)
                                        There is a compatibility issue with this Environment component and the new version of three.js, I think it should be resolved soon though.
                                        For now, I have inlcuded an ambientLight component instead. When this issue is resolved, feel free to add the Environment component back in.
                                    - Jacob Amin */}

                                    {/* <Environment /> */}
                                    <ambientLight />
                                    <OrbitControls />
                                </Suspense>
                            </Canvas>
                        </Grid>

                </Grid>



                <Grid container spacing={2} className="" style={{padding: "2% 0 2% 0"}}>
                    <Grid xs={6} container className="right-align-experiences" alignItems="center" justifyContent="center" direction="column">
                        <h1 className="sub-header-experiences">Spring 2023 Progress</h1>
                    </Grid>


                    <Grid container xs={6} alignItems="center" justifyContent="center" direction="column">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/yJHL_D9JobI" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}

export default EmergingTech;