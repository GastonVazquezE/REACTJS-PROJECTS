import useFetch from "./useFetch"

export default function UseFetchHookTest() {

    const { data, error, pending } = useFetch('https://dummyjson.com/products', {});

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {pending ? <h3>Loading data...</h3> : null}
            {error ? <h3>{error}</h3> : null}
            {
                data && data.products && data.products.length
                    ? data.products.map((productisItem) => (
                        <p key={productisItem.id}>{productisItem.title}</p>
                    ))
                    : null
            }
        </div>
    )
}