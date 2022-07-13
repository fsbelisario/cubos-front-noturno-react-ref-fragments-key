function Dish({ name, price, qty = 0, setQuantities }) {
    return (
        <>
            <b>{name}</b>
            <br />
            <input type="number" min={0} value={qty} onChange={(ev) => setQuantities(ev.target.valueAsNumber)} />
            {" "}
            &times;
            {` R$ ${price.toFixed(2)} = `}
            <b>{`R$ ${(price * qty).toFixed(2)}`}</b>
            <br />
        </>
    );
}

export default Dish;