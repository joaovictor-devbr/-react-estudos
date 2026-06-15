function Button ({ label, variant = "primary", ...rest }){
    return(
        <button className={`btn ${variant}`} {...rest}>
            {label}
        </button>
    )
}

export default Button;