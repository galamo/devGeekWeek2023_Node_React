interface IProps {
    text: string,
    color?: string
}
function Header(props: IProps) {
    if (typeof props.text !== 'string') return null;
    const upperCase = props.text.toUpperCase()
    return <h1 style={{ color: props.color }}> {upperCase}</h1>
}

export default Header