
class BaseViewModel {
    private view: any;

    constructor(view: any) {
        this.view = view;
        this.view.state = this;
    }

    refreshView(){
        this.view.setState(this);
    }
}

export default BaseViewModel
