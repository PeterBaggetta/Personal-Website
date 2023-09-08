import React from 'react';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import './Projects.css';

// ---------- Project images ---------- //
// ----- Project 1 -----//
import CBCEncryption from '../../media/Project_CBC_Encryption.png';
import CBCFlow from '../../media/Project_CBC_Mode_Flow_Diagram.png';
import TestInput from '../../media/Project_128-bit_CBC_Mode_Test_Input.png';

// ----- Project 2 -----//
import passwordManager from'../../media/Project-Password-Manager.png';
import passManagerPasswords from '../../media/Project-Password-Manager_Passwords.png';
import passManagerKey from '../../media/Project-Password-Manager_Key.png';

// ----- Project 3 -----//
import AutoencoderBefore from'../../media/Project_Autoencoder_Before.png';
import AutoencoderAfter from'../../media/Project_Autoencoder_After.png';
import AutoencoderLearning from '../../media/Project_Autoencoder_Learning.png';

// Technologies Used logos
import C from '../../media/C.png';
import Git from '../../media/git.png';
import Verilog from '../../media/systemverilog.png';
import Python from '../../media/python.png';

const project1 = [
    {
        original: CBCEncryption,
    },
    {
        original: CBCFlow,
    },
    {
        original: TestInput,
    },
];

const project2 = [
    {
        original: passwordManager,
    },
    {
        original: passManagerPasswords,
    },
    {
        original: passManagerKey,
    },
];

const project3 = [
    {
        original: AutoencoderBefore,
    },
    {
        original: AutoencoderAfter,
    },
    {
        original: AutoencoderLearning,
    },
];

export function Projects () {
    
    return (
        <>
            <section className='projects' id="projects">

                <div class="container">
                    <h2>Projects</h2>
                    {/* Project 1 */}
                    <div class="row">
                        <div class="project-info col-2">
                            <h3>AES Encryption Coprocessor</h3>
                            <ul>
                                <li> &#8226; Implemented an AES coprocessor on a DE1-Soc development board.</li>
                                <li> &#8226; Created a APB IP module to interface between the hardware on the FPGA and software on the host computer.</li>
                                <li> &#8226; Software and hardware are coded with System Verilog and C for command line interaction.</li>
                                <li> &#8226; Find out more information below in GitHub: </li>
                            </ul>
                            <h4>Technologies Used:</h4>
                            {/* C */}
                            <img src={C} class="project-tech-img" alt="C logo"/>
                            {/* Git */}
                            <img src={Git} class="project-tech-img" alt="Git logo"/>
                            {/* Verilog */}
                            <img src={Verilog} class="project-tech-img" alt="Verilog logo"/>
                            <a href="https://github.com/PeterBaggetta/AES-Encryption-Coprocessor-in-CBC-Mode/tree/main" target="_blank" class="project-button" rel="noreferrer">GitHub Repo</a>                         
                        </div>

                        <ImageGallery items = {project1} />
                    </div>




                    {/* Project 2 */}
                    <div class="row">
                        <div class="project-info col-2">
                            <h3>Password Manager with Encryption</h3>
                            <ul>
                                <li> &#8226; This is a password manager with built in encrytion coded in Python.</li>
                                <li> &#8226; A simple command line interface to enter passwords, have them saved into a file and from there they are automatically encrypted by the program.</li>
                                <li> &#8226; Find out more information below in GitHub: </li>
                            </ul>
                            <h4>Technologies Used:</h4>
                            {/* Python */}
                            <img src={Python} class="project-tech-img" alt="Python logo"/>
                            {/* Git */}
                            <img src={Git} class="project-tech-img" alt="Git logo"/>
                            <a href="https://github.com/PeterBaggetta/Password-Manager-with-Encryption-in-Python" target="_blank" class="project-button" rel="noreferrer">GitHub Repo</a>
                        </div>

                        <ImageGallery items = {project2} />
                    </div>

                    <div class="row">
                        
                        {/* Project 3 */}
                        <div class="project-info col-2">
                            <h3>Auto-Encoder</h3>
                            <ul>
                                <li> &#8226; This project was implemented to compare the performance difference between the two coding languages.</li>
                                <li> &#8226; Comparisons of power usages and efficiency between a python implementation versus a C implementation of an auto-encoder.</li>
                                <li> &#8226; Three different systems were implemented to obtain a accurate result. </li>
                                <li> &#8226; Find out more information below in GitHub: </li>
                            </ul>
                            <h4>Technologies Used:</h4>
                            {/* Python */}
                            <img src={Python} class="project-tech-img" alt="Python logo"/>
                            {/* C */}
                            <img src={C} class="project-tech-img" alt="C logo"/>
                            {/* Git */}
                            <img src={Git} class="project-tech-img" alt="Git logo"/>
                            <a href="https://github.com/PeterBaggetta/Autoencoder" target="_blank" class="project-button" rel="noreferrer">GitHub Repo</a>

                        </div>
                        
                        <ImageGallery items = {project3} />
                    </div>
                </div>
            </section>
        </>
    );
}