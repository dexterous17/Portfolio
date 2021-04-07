import React from 'react'
import './Stylesheet/Projectinformation.css'

function Projectinformation({data}) {
    return (
        <div className="Project__Information">
                                
                                <div className="Information__Name">
                                    {data.Name}
                                </div>
                                
                                <div className="Information__Skills">
                                  <div className="Skill__Title">      
                                  Technologies used to write website :
                                  </div>

                                  <div className="Skill__Name">
                                      HTML
                                  </div>
                                  <div className="Skill__Name">
                                      CSS
                                  </div>
                                  <div className="Skill__Name">
                                      Javascript
                                  </div>
                                  <div className="Skill__Name">
                                      Node.js
                                  </div>
                                  <div className="Skill__Name">
                                      react.js
                                  </div>
                                  <div className="Skill__Name">
                                      Stripe.js
                                  </div>
                                </div>


                                <div className="Information__Link">
                                    <div className="Link__Repo">
                                        Github link
                                    </div>
                                    <div className="Link__Project">
                                        Live Project Link
                                    </div>
                                    </div>
                                </div>                        
    )
}

export default Projectinformation
