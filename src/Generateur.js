import React, { Component } from 'react';
import logo from './logo.svg';
import './Generateur.scss';
import citations from './citations.js';
class Generateur extends React.Component{

    
	render(){

		return(
			<div>
			 <div id="citation">
               <p class="citation" id="quot">
                {citations[this.props.citation].citation} 
               <span id="auteur">
               {citations[this.props.citation].auteur} 
               </span>
               </p>
             </div>  
			  <div class="container groupe">
		        <button class="btn btn-default col-lg-6 col-md-12 col-xs-12 bouton" id="click" onClick={this.props.generate}>Generer!</button>
	        	<button class="btn btn-primary col-lg-6 col-md-12 col-xs-12 bouton" ><i class="fa fa-twitter" id="twitter" onClick={this.props.twitt}> twitter!</i></button>
               </div>	
			</div>
			);
	}
}

export default Generateur;


