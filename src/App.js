import './Stylesheet/App.css';
import Particles from './Particles';
import Projectinformation from './Projectinformation';
import image from "./self.jpg"

function App() {
 
  const data = [
  
    {
    "Name":"Amazon",
    "Technologies":["HTML","CSS","Javascript","Node.js","React.js","Stripe.js","Firebase database","Firebase cloud function"],
    link:[]
    },
    {
      "Name":"Reading list",
      "Technologies":["HTML","CSS","Javascript","React.js","Firebase Hosting","Local storage"],
      link:[]
    },
    {
      "Name":"Covid 19 Tracker",
      "Technologies":["HTML","CSS","Javascript","React.js","MATERIAL-UI","Firebase database","D3.js","React Leaflet"],
      link:[]
    },
    {
      "Name":"LinkedIn",
      "Technologies":["HTML","CSS","Javascript","Node.js","React.js","Firebase database","Firebase cloud function"],
      link:[]
    }
  ]

  const github = "https://github.com/dexterous17?tab=repositories"

  
return (
    <div className="App">
      <Particles className="particles"/>
      
      <div className="App__Container">
        <div className="Container__1">
            <h3>Harshil Prajapati</h3>
        
        <div className="One__Container">  
          
            <div className="Container__image">
              <img src={image} alt="Self"></img>
            </div>
          
            <div className="Container__link">  
              <a href={github} target={github}>Github.com</a>
              <a href={github}>Resume</a>
              <a href={github}>Email</a>
              <a href={github}>Linkedin</a>
              <a href={github}>Twitter</a>
            </div>
          
          </div>
        </div>
        
        <div className="Container__2">
          <div className="Two__Introduction">
          Self-taught Web developer with fundamental knowledge of frontend web development and UI design. Seeking to Utilize broad educational background with excellent analytical, technical, programming skills to thrive as an entry- level Frontend Web Developer.
          </div>
          <div className="Two__Project">
            <div className="Project__Title">
              Projects
            </div>
            {
              data.map((item)=>(
              <Projectinformation data={item}/>   
            ))
            }
                     
            
            </div>

                              

          <div className="Two__Certification">

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
