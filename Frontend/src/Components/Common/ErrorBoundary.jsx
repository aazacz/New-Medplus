import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false,
              error: null,
              info: null,
              errorMessage: "" }

    static getDerivedStateFromError(error) {
        return { hasError: true, info:error }
    }
 
    componentDidCatch(error,info){
        
        console.log("Error Boundary Caught an error",error)
        this.setState({ info: info });
        this.setState({ error: error });
        this.setState({ errorMessage: error.message });
    }

    render(){
        if (this.state.hasError) {
            return <div className="w-full  text-lg outline text-red-600">Error occurred: <span className="font-bold"> {this.state.error ? this.state.errorMessage : 'errr'}</span></div>
    }
    return this.props.children

}
}

export default ErrorBoundary