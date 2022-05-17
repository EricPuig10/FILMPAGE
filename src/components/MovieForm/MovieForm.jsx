import {Component} from "react";

export class MovieForm extends Component{
    constructor(){
        super();

        this.state = {
            showPreview:false,
            newMovie: {
                id: Math.floor(Math.random() * 100),
                title:"",
                yearOfProd:"",
                imgUrl: "",
                fav: <i className="fa-solid fa-star fa-lg"></i>,
    
            },
        };
    }


    onSubmitHandler = (e) => {
    e.preventDefault();
    
    if (this.state.newMovie.title.length > 0){
        this.props.addNewMovie(this.state.newMovie);
    }
    
    this.resetInputsForm(e);
    };



//Extract to method 

    resetInputsForm = (e) => {
    this.setState({newMovie:{id: '', title:'', yearOfProd:'', imgUrl:'', fav: ''}})
    };

    onInputChange = (e) => {
        const name = e.target.name;
        

        const value = e.target.value;
        

        this.setState({newMovie: {...this.state.newMovie, [name]:value}});
    };

    showPreview = () => {
        if(this.state.newMovie.imgUrl.length > 0) this.setState({showPreview:true})
        else this.setState({showPreview:false});

        console.log(this.state.showPreview);
        console.log(this.state.newMovie.imgUrl.length)
    };

    
    render(){

        return <div className="addNewFilm">

        <form onSubmit={this.onSubmitHandler}>
            <div className="formCont">
                <div className="inputsCont">
                    <input onChange={this.onInputChange} value={this.state.newMovie.imgUrl} name="imgUrl" id="inputMovieUrl" type="url" placeholder="Paste img url here..."></input>
                    <input onChange={this.onInputChange} value={this.state.newMovie.title} name="title" id="inputMovieTitle" type="text" placeholder="Title..."></input>
                    <input onChange={this.onInputChange} value={this.state.newMovie.yearOfProd} name="yearOfProd" id="inputMovieYear" type="text" pattern="[0-9]{4}" placeholder="YearOfProd..."></input>
                    <button type="submit" className="submitBtn" ><i className="fa-solid fa-paper-plane fa-xl"></i></button>
                </div>
                
                <div className="preview">
                {this.state.showPreview?
                    ""
                    :<img src={this.state.newMovie.imgUrl} alt="preview"/>
                }
                </div>
                

            </div>
        </form>
    </div>
    }
}
