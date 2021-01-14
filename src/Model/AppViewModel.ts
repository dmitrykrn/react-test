
import BaseViewModel from "./BaseViewModel";

class AppViewModel extends BaseViewModel{
    private title: string;

    constructor(view: any) {
        super(view);
        this.title = 'Title';
    }

    reverseTitle = () => {
        this.title = this.title.split('').reverse().join('');
        this.refreshView();
    }

    get Title(){
        return this.title;
    }
}

export default AppViewModel;
