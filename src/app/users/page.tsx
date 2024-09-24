import Link from "next/link"

const User = ({ randNum }: { randNum: number }) => {
    return (
        <>
            <p>hollaa {randNum}</p>
            <Link href="/">Home</Link>
        </>
    )
}

export default User