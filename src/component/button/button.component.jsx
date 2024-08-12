// we know there are 3 buttons .inverted google sign , default
    import '../button/button.styles.scss'

const ButtonTypeClasses={
    google: 'google-sign-in',
    inverted :'inverted',
}


const Button   =({childern ,buttonType,...otherProps})=>{
    return (
        <button className={` button-container ${ButtonTypeClasses[buttonType]}`}
        {...otherProps}>
            {childern}
        </button>
    );
};

export default Button;