interface Props {
    size: 1 | 2 | 3 | 4 | 5 | 10,
    src: string,
}

function CircularImage({ size, src } : Props){
    return <img src={src} className={`rounded-circle size__height--${size} size__width--${size}`}/>
}

export default CircularImage;