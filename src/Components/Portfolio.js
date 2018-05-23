import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
       var work = this.props.data.work.map(function(work){
        return <div key={work.pName}><h3>{work.pName}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p> <p>{work.description1}</p> <p>{work.description2}</p> <p>{work.description3}</p>
        </div>
      })

      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio255x114/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} target="_blank " title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }


    return (
      <section id="portfolio">
        <section id="portfolio">
          <div className="row education">

         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
        </section>
      <div className="row">
         <div className="twelve columns collapsed">
            <h2>Check Out Some of My Works.</h2>
            <p>*Best viewed in a desktop browser*</p> 
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
