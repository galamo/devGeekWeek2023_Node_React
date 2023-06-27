import css from "./style.module.css"
export default function Product(props: { title: string, price: string, image: string }) {

    return <div className={css.Product} >
        <h2> {props.title} </h2>
        <h3>{props.price}$ </h3>
        <img src={props.image} height={100} width={100} />
    </div>

}
