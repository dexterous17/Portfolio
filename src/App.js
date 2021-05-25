import './Stylesheet/App.css';
import Particles from './Particles';
import Projectinformation from './Container/Projectinformation';
import image from "./self.jpg"
import Link from './Container/Link';

function App() {
 
  const data = [
  
    {
    "Name":"Amazon",
    "Technologies":["HTML","CSS","Javascript","Node.js","React.js","Stripe.js","Firebase Database","Firebase Cloud Function"],
    link:["","https://clone-7ef08.web.app/"]
    },
    {
      "Name":"Reading list",
      "Technologies":["HTML","CSS","Javascript","React.js","Firebase Hosting","Local Storage"],
      link:["","https://reading-list-4f071.web.app/"]
    },
    {
      "Name":"Covid 19 Tracker",
      "Technologies":["HTML","CSS","Javascript","React.js","MATERIAL-UI","Firebase Database","D3.js","React Leaflet"],
      link:["","https://covid-19-tracker-886fa.web.app/"]
    },
    {
      "Name":"Burger Builder App",
      "Technologies":["HTML","CSS","Javascript","Node.js","React.js","Firebase Database","Firebase Cloud Function"],
      link:["","https://burger-app-c2bb0.web.app/"]
    }
  ]

  const Link_data = [
    {
      "Name":"Github",
      "href":"https://github.com/dexterous17"
    },{

    },{
      "Name":"Resume",
      "href":""
    },
    {
      "Name":"Email",
      "href":""
    },{
      "Name":"LinkdIn",
      "href":""
    }
  ]

  

  
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
              {
              Link_data.map((item)=>(
              <Link data={item}/>   
            ))
            }
            </div>
          
          </div>
        </div>
        
        <div className="Container__2">
          <div className="Two__Introduction">
          Self-taught Web developer with the Fundamental Knowledge of HTML5, CSS3, Javascript, Node.js,React,js,MongoDB, Firebase and AWS. Seeking to utilize the Broad Knowledge to develop Web site which is used in real-time.
              <br></br>
          <strong>P.S</strong> : Actively seeking new Opportunities to Thrive as a Junior Frontend Web developer Where analytical, technical, Programming Skills are required.
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
