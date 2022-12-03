interface Props {
    children: any;
}

function Center({ children }: Props) {
    return <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        {children}
    </div>
}

export default Center;