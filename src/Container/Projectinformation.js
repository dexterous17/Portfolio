import React from 'react'
import '../Stylesheet/Projectinformation.css'

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
                                        <a href={data.Link[0]} target={data.Link[0]}>Github link</a>
                                    </div>
                                    <div className="Link__Project">
                                        <a href={data.Link[1]} target={data.Link[1]}>Live Project Link</a>
                                    </div>
                                    </div>
                                </div>                        
    )
}

export default Projectinformation
