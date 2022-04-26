import Link from "next/link"

function Home() {
    return (
        <div>
            <h4>Home</h4>
            <Link href="/sobre">
                <a>Acessar PAGINA..... Sobre!</a>
            </Link>
        </div>
    )
}


export default Home