

var Message = React.createClass({
   
    render: function(){
      var name = this.props.name;
      var greeting =  this.props.greeting;
        
        return (
         <div>
           <h1> Hello {name} </h1>
           <p> {greeting}</p>
       </div>
        );
    }
});

    
    var InputForm = React.createClass({
       
        changeInput: function(e){
          e.preventDefault();
            
            var update = {};
            var nameVal = this.refs.name.value; 
            
    
            if(nameVal.length >0 && typeof nameVal ==="string" ){
                update.name = nameVal;
                console.log(typeof update.name + " : " + nameVal.length);
               this.refs.name.value ="";
           
            }
            
           
             this.props.updateInfo(update); 
        },
    
        render: function(){
            return (
           
              <form onSubmit={this.changeInput} >
                  <input type="text" ref="name"/>
                  <button>Submit</button>
              </form>
            
            );
        }
});

var Greeter = React.createClass({

    getDefaultProps: function(){
        
      return {
          name: "Wali Gauvin",
          greeting: "How are you?"
      }  
    },
    
    getInitialState: function(){
        return {
          name: this.props.name
        }
    },
        
        update: function(n){
            this.setState(n);
        },

        render: function(){
        var name = this.state.name;
        var greeting = this.state.greeting;
       return (
      <div className="container">
          <div className="jumbotron text-center">
              <Message  name={name} greeting={greeting} />
          <InputForm updateInfo={this.update} />
          </div>
      </div>
                 );
       
   } 
    
});


ReactDOM.render( < Greeter / > ,
    document.getElementById("app"));