import React from "react";

interface Props {
    
}
 
interface State {
    
}
 
class Test extends React.Component<Props, State> {

    constructor(props:Props) {
        super(props)
    }

    componentWillUnmount(): void {
        
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        
    }

    componentDidMount(): void {
        console.log(11111);
    }

    render() { 
        console.log(2222);
        return ( 
            <div>
                Ok
            </div>
         );
    }
}
 
export default Test;