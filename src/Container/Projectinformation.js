import React from 'react'
import '../Stylesheet/Projectinformation.css'
import SkillName from './SkillName'

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
                                    {
                                        data.Technologies.map((item)=>(
                                            <SkillName data={item}/>    
                                        ))
                                    }
                                </div>


                                <div className="Information__Link">
                                    <div className="Link__Repo">
                                        <a href={data.link[0]} target={data.link[0]}>Github link</a>
                                    </div>
                                    <div className="Link__Project">
                                        <a href={data.link[1]} target={data.link[1]}>Live Project Link</a>
                                    </div>
                                    </div>
                                </div>                        
    )
}

export default Projectinformation
