import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false,
              error: null,
              info: null }

    static getDerivedStateFromError(error) {
        return { hasError: true, info:error }
    }
 
    componentDidCatch(error,info){
        
        console.log("Error Boundary Caught an error",error,"Info", info)
        this.setState({ info: info });
    }

    render(){
        if (this.state.hasError) {
            return <div className="w-full  text-lg outline text-red-600">Error occurred: Error occurred: {this.state.error ? this.state.error.toString() : ''}</div>
    }
    return this.props.children

}
}

export default ErrorBoundary