import Link from "next/link"

const Product = ({ randNum }: { randNum: number }) => {
    return (
        <>
            <p>Hellooowww {randNum}</p>
            <Link href="/">Home</Link>
        </>
    )
}

export default Product