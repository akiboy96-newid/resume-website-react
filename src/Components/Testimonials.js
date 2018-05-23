import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      
   </section>
    );
  }
}

export default Testimonials;
