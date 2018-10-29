import React, {Component} from 'react'
import '../styles/PlainSection.css';

class PlainSection extends Component {
   

    render(){
    
        const {bgColor,textColor,title,paragraph,buttonLabel, hr} = this.props;
        let items =''
        if(this.props.imageItems){
             items = this.props.imageItems.map((item) =>(
                <div className="grid-item">
                    <img className="img-item" src={item.img}/>
                    <span>{item.caption}</span>
                </div>
            ));
        }
       

        return(
            <section className="plain" style={{backgroundColor: bgColor, color: textColor}}>
                <h3 className="title">
                    {title}
                </h3>
                {hr ? <hr style={{backgroundColor: textColor}}></hr>: ''}
                <p>
                    {paragraph}
                </p>
                {buttonLabel ? <a href="#"className="btn">
                    {buttonLabel}
                </a> : ''}
               
                <div className="grid">
                    {items}
                </div>
                
               
            </section>
        )
    }
}

export default PlainSection;
