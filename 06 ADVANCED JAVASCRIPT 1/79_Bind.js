class React {
    constructor(){
        this.library = "React"
        this.server = "https://localhost:3000/"

        // requirement
        // document
        // .querySelector('button')
        // .addEventListener('click',()=>{
        //     this.handleClicked()
        // })
        document
        .querySelector('button')
        .addEventListener('click',this.handleClicked.bind(this))

    }

    handleClicked(){
        console.log("Button Clicked");
        console.log(this.server);
    }
}

const reactApp = new React()