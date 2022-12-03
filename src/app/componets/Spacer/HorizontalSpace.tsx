interface Props {
    width: 1 | 2 | 3 | 4 | 5 | 6,
}

function HorizontalSpace({ width }: Props) {
    return <div className={`space__horizontal--${width}`}></div>
}

export default HorizontalSpace;