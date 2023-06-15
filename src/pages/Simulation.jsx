import React from 'react'

function Simulation(props) {
  return (
    <div className="container" id="orin" style={{marginTop: '200px'}}>
        <div className="section-title center-block">
            <h2>Setting Up Simulation</h2>
            <p>For navigation we used move_base library alongside with trajectory planner. Move_base keeps track of both a local cost map and a global cost map. These are separate from the map we generate and feed from the output from pointcloud_to_laserscan library directly. These maps enable the robot to perceive its environment and generate a local plan and a global plan accordingly. </p>  
            <p>The local cost map and the local plan extend 3 meters from the robot but the global map extends 100 meters. This is because we want to be able to update the local cost map much more frequently to have dynamic obstacle avoidance capability and want to have a 100 meters global range. Since the robot cannot navigate to a place where it is outside the global costmap we set up the global map’s range of 100 meters. </p>
            <p>If for any reason the robot’s global path is obscured while moving, it will momentarily stop and calculate a new global path. The robot achieves this by checking the local cost map to see if the global path is unobscured. If the global path has a navigable obstacle on it the robot will try to navigate around it first. If it is completely blocked it will recalculate the global path.</p>
            <li>For installing Gazebo you can run this command:</li>
            <p><code>curl -sSL http://get.gazebosim.org | sh</code></p>
            <li>You can test whether gazebo is installed correctly or not by running this command:</li>
            <p><code>gazebo</code></p>
            <li>After you successfully install ros and gazebo you need to create a catkin workspace. You can do this by following these commands:</li>
            <p><code>mkdir -p ~/catkin_ws/src</code></p>
            <p><code>cd ~/catkin_ws/</code></p>
            <p><code>catkin_make</code></p>
            <p>Then you need to source this workspace by running this command:</p>
            <p><code>source devel/setup.bash</code></p>
            <p>After these steps you can go ahead and download the simulation codes from our <a href='https://github.com/kaantuncer/Moborobo-Project'>github page</a> </p>
            <p>You can simply copy the files inside the simulation/src folder into your own src folder. After that you need to run catkin_make again by running <code>catkin_make</code></p> 
            <p>After that you are all set up to run the simulation. You can run this command to start the simulation with rviz:</p>
            <p><code>roslaunch moborobo navigation.launch</code></p>
       </div>
    </div>
  )
}

export default Simulation;