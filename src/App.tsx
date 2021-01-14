import React from 'react';
import AppViewModel from "./Model/AppViewModel";

class App extends React.Component {
    private model: AppViewModel;

    constructor(props: any) {
        super(props);
        this.model = new AppViewModel(this);
    }

    render() {
        return (
            <div>
                <h1>{this.model.Title}</h1>
                <button onClick={this.model.reverseTitle}>Reverse Title</button>
            </div>
        )
    }
}

export default App;
