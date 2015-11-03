var React = require('react');

export var TheParallaxInstance = React.createClass({
	render: function(){
		var someArray = [
			{  
				rComponent: <ParallaxFodder hdr={"Foreground"} msg={"scrolls faster"} />, 
			    lnk: "http://lorempixel.com/1200/900/nature/5/"
			},
			{  rComponent: <ParallaxFodder hdr={"Background"} msg={"scrolls slower"} />, 
			    lnk: "http://lorempixel.com/1200/900/nature/2/"
			},
			{
				rComponent: <ParallaxFodder hdr={"Note:"} msg={"rate of background-scroll determined by 'perspective' on parallax background"}/>, 
				lnk: "http://lorempixel.com/1200/900/nature/1/"
			},
		]
		return <ParallaxContainer parallaxProps={someArray} />
	}

})

var ParallaxFodder = React.createClass({
	getInitialState() {
	    return {
	      blockStyles: {
	      	width: '300px',
	      	margin: "240px auto",
	      	padding: '10px',
	       	color: 'white',
	       	textAlign: 'center', 
	       	fontFamily: 'Helvetica',
	       	background: "rgba(100,100,100,.5)"
	      } 
	    };
	},
	render: function(){
		var styles = { 
			}
		return <div style = {this.state.blockStyles} >
			<h3 style={{color:'white'}}>{this.props.hdr}</h3>
			<p>{this.props.msg}</p>
		</div>
	}
})



//------------------------
// Parallax Component Setup
//------------------------

// Initial state (parallax components) 
//   must contain an ARRAY of objects 
//   that is passed into props--
//     (1) rComponent (a react component)
//     (2) lnk (background image) 

		// {  
		// 		rComponent: <SomeComponent/>, 
		//    lnk: "«imgURL»"
		// },
		// 

export var ParallaxContainer = React.createClass({
  getInitialState() {
      var parallaxArray = (
      	  this.props.parallaxProps || []
      );

      return {
        parallaxComponents: parallaxArray
      };
  },

  render: function(){
    return (
        <div>
          { 
            this.state.parallaxComponents.map(function(data, i ){
              console.log(i)
              return (
                <ParallaxComponent indx={i+1}  plxBackground={<ParallaxImg imgSrc={data.lnk}/>}>
                  
                   {data.rComponent}
                
                </ParallaxComponent>
              )
            })
          }
        </div>
    )
  }
}) 

var ParallaxImg = React.createClass({
		getInitialState: function(){
			return {
				imgContainer: {
		        height: "120%",
		        backgroundSize: "cover",
		        backgroundImage: "url("+this.props.imgSrc+")",
		        backgroundPosition: "center center",
		        backgroundRepeat: "no-repeat",
		        transitionProperty: "opacity !important",
		        transitionTimingFunction: "ease",
		        transitionDuration: ".25s"
		      }
    	}
		},

    render(){
        return (
          <div style={this.state.imgContainer} className="imgContainer"/>
        )
    }
})

var ParallaxComponent = React.createClass({
    getInitialState() {
        return {
          parallaxBackStyle: {
          	transform: 'translateY(0)',
        	  position: "absolute",
	          top: "0",
	          right: "0",
	          bottom: "0",
	          left: "0",
	          zIndex: "-1",
	          willChange: "transform"
          },

          parralaxWrapper: {
          	overflowX: "hidden",
    				overflowY: "hidden",
   					position: "relative",
   					minHeight: "650px"	
          }
        };
    },
    
    _calcPosition(){
      if (document.body.offsetWidth > 992) {

        var clamp = (x, low, high) => Math.min(Math.max(x, low), high)
      

        var mysteryNumbr = .75,
            perspective = 300,
            scrollY = window.scrollY,
            el = React.findDOMNode(this),
            offsetTop = el.offsetTop,
            offsetHeight = el.offsetHeight,
            d = (scrollY - offsetTop) * mysteryNumbr / offsetHeight,
            translateCalc= (
              "translateY(" +
                clamp( 
                   (d*perspective).toFixed(0), 
                   (-(1-mysteryNumbr)*offsetHeight).toFixed(0), 
                   (mysteryNumbr*offsetHeight).toFixed(0))
                + "px) translateZ(0)"
            )
        console.log("------- PlxDiv:::"+(this.props.indx)+"------------")
        console.log( "x:" , (d*perspective).toFixed(0) )
        console.log( "low:" ,-(1-mysteryNumbr)*offsetHeight.toFixed(0) )
        console.log( "high:" ,(mysteryNumbr*offsetHeight).toFixed(0) )

        var pxNewStyles = JSON.parse(JSON.stringify(this.state.parallaxBackStyle))
        pxNewStyles.transform = translateCalc

        this.setState({
        	parallaxBackStyle: pxNewStyles
        })

       } else if (this.state.style.transform !== "translateY(0)"){
          this.setState({
             parallaxBackStyle: {transform: "translateY(0)"}
          })
       }
    },

    componentDidMount(){
        window.addEventListener('scroll', this._calcPosition)
    },

    componentDidUnmount(){
        window.removeEventListener('scroll', this._calcPosition)
    },

    render(){
        return (
            <div style={this.state.parralaxWrapper}>
                <div style={this.state.parallaxBackStyle}>
                    {this.props.plxBackground}
                </div>
                <div className="parallax-base">
                    {this.props.children}
                </div>
            </div>
        )
    }
})

  