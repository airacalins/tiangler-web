interface Props {
    height: 1 | 2 | 3 | 4 | 5,
}

const VerticalSpace = ({ height }: Props) => (
    <div className={`space__vertical--${height}`}></div>
)

export default VerticalSpace;