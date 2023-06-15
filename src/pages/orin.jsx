import React from 'react'

function Orin(props) {
  return (
    <div className="container" id="orin" style={{marginTop: '200px'}}>
        <div className="section-title center-block">
          <h2>Setting Up Jetson Orin For Development</h2>
          <p>In order to use nVidia Jetson Orin properly with our robot, first we need to complete its setup on the operating system side as well as on the ROS side. Nvidia has an SDK manager for managing Orin’s operating system and its other components such as CUDA, Computer Vision packages and so on. Nvidia itself describes SDK Manager as:</p>
          <li>NVIDIA SDK Manager is a tool which provides an end-to-end development environment setup solution for NVIDIA’s DRIVE, Jetson, Holoscan, Rivermax, DOCA and Ethernet Switch SDKs for both host and target devices</li>
          <img className="img-responsive center-block" src='img/setup/orin1.png' alt="package" />
          <p>On Jetson Orin, we set up JetPack 5.1.1 and JetPack versions 5.x setups are only supported on Ubuntu 18.04 and 20.04 versions[1]. So, in order to set Orin up, we installed Ubuntu 20.04 on our host computers. </p>
          <img className="img-responsive center-block" src='img/setup/orin2.png' alt="package" />
          <p>As a last but not least thing right before starting the installation process, we need to put Orin in recovery mode. This can be done with starting Orin by pressing on the recovery button. If the Orin is already running, then the reset button along with the recovery button should be pressed till it turns off and on again. After turning on, both buttons can be released.</p>
          <img className="img-responsive center-block" src='img/setup/orin3.png' alt="package" />
          <p>After putting Orin into recovery mode and connecting it to the host machine via its USB cable, it should appear in the SDK manager. We set the Orin up with JetPack 5.1.1 and DeepStream package as additional SDK.</p>
          <img className="img-responsive center-block" src='img/setup/orin4.png' alt="package" />
          <p>As we continue to the next steps, the SDK manager will download the necessary files and start installing them into Orin by itself. It might take a while since the files that are being downloaded and transferred are large files.</p>
          <img className="img-responsive center-block" src='img/setup/orin5.png' alt="package" />
          <p>After flashing Jetson OS, the SDK manager will ask about the setup type that we want to continue as well as username and password for our Orin.</p>
          <p>We pick Manual Setup for Jetson Orin 32GB - Developer Kit and put username, password into the given boxes. We used “moborobot” as our username and “root” as our password. Rest of the settings can be left with their default values.</p>
          <p>After this step and right before additional SDKs installation, SDK manager will ask again for our username and password. In this step it won’t create a new user but it will use the credentials for installation purposes, so we used the credentials that we gave in the steps before. Before confirming the SDK installation, we went into our Orin and completed the initial setup, so it can continue without any problems.</p>
        </div>
    </div>
  )
}

export default Orin;