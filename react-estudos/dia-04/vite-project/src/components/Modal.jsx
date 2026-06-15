function Modal({ children }){
    return(
        <div 
        style={{
         border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        margin: "20px auto",
        }}
        >
            <h2>Modal</h2>

            {children}
        </div>
    )
}

export default Modal