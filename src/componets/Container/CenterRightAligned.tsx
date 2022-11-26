interface Props {
    children: any;
}

function CenterRightAlign({ children }: Props) {
    return <div className="d-flex flex-column align-items-right justify-content-right h-100 w-100">
        {children}
    </div>
}

export default CenterRightAlign;