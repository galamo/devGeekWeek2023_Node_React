export default function Product(props: { title: string, price: string, image: string }) {

    return <div style={{ border: "1px solid black", borderRadius: "10px", margin: "10px" }}>
        <h2> {props.title} </h2>
        <h3>{props.price}$ </h3>
        <img src={props.image} height={100} width={100} />
    </div>

}
