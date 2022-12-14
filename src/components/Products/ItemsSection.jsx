import Item from "./Item";

export default function ItemsSection({ category, data }) {

    const items = data.map(
        i => <Item
            key={i.id}
            id={i.id}
            image={i.image}
            title={i.title}
            price={i.price}
        />
    )

    return (
        <section className="itemsSection">
            <h1 className="itemsSection-title">{category}</h1>
            <div className="items-container">
                {items}
            </div>
        </section>
    )
}