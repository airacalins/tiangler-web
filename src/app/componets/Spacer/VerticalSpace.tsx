interface Props {
    height: number,
}

function VerticalSpace({ height } : Props){
    return <div className={`space__vertical--${height}`}></div>
}

export default VerticalSpace;