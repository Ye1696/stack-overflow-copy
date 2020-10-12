import React from 'react'

export function ForBusinesses() {
    return (
        <div className="forBusinesses">
            <div className="forBusinesses-container">
                <div className="forBusinesses-title">
                For businesses, by developers
                </div>
                <div className="line"></div>
                <div className="forBusinesses-def">Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.</div>
                <div className="forBusinesses-cards">
                    <div className="forBusinesses-card">
                        <div className = "forBusinesses-card-img">
                            <img src="https://cdn.sstatic.net/Img/home/private-questions.svg?v=a4f1cfb08f7e"/>
                        </div>
                        <div className = "forBusinesses-card-def">Quickly find and share internal knowledge with <a href="#" className="forBusinesses-card-def-href">Private Q&A</a></div>
                    </div>
                    <div className="forBusinesses-card">
                        <div className = "forBusinesses-card-img">
                        <img src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"/>
                        </div>
                        <div className = "forBusinesses-card-def">Find the perfect candidate for your growing technical team with <a href="#" className="forBusinesses-card-def-href">Talent solutions</a></div>
                    </div>
                    <div className="forBusinesses-card">
                        <div className = "forBusinesses-card-img">
                        <img src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"/>
                        </div>
                        <div className = "forBusinesses-card-def">Accelerate the discovery of your products or services through our <a href="#" className="forBusinesses-card-def-href">Advertising platform</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


