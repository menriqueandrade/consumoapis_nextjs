import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';
{/*De esta manera podemos con children para enviar parametros a esta seccion o cualquiera*/ }
{/*Tambien utilizamos los metadatos para cambiar el titulo de la pagina donde nos encontremos lo que es title y description*/ }

const name = "Manuel";
const Layout = ({ children, title, description, home }) => {
    return (
        <div className={styles.container}>
            <Head>

                <title>{title}</title>

                <meta name="Descripcion"
                    content={description}>
                </meta>

            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/img/1.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/img/1.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <nav>
               <Link href="/">
               <a>Inicio |</a>
               </Link>
            
               <Link href="/blog">
               <a>Blog |</a>
               </Link>
               <Link href="/contact">
               <a>Contacto |</a>
               </Link>
               <Link href="/about">
               <a>About |</a>
               </Link>
            </nav>

            <main>
                {children}
            </main>
            <footer>

                {/* De esta manera regresamos al home con stylos predefinidos */}
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </footer>


        </div>
    );
}

export default Layout;
{/*Esto sale en el titulo del sitio web*/ }
Layout.defaultProps = {
    title: "Next.js| Mi sitio Web",
    description: "Mi primer sitio web con Next.js"
}