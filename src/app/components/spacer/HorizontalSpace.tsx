interface Props {
    width: 1 | 2 | 3 | 4 | 5 | 6,
}

const HorizontalSpace = ({ width }: Props) => (
    <div className={`space__horizontal--${width}`}></div>
)

export default HorizontalSpace;