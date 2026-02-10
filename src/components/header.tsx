import Head from "next/head";

export default function CustomHead() {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Cinch Markets – Turning idle land into income</title>
            <meta
                name="description"
                content="Turning idle land into income. Join Cinch and earn more money instantly with no risk. We create purpose-built irrigated farms for domestic and export markets."
            />
            <meta name="robots" content="max-image-preview:large" />

            {/* Icons */}
            <link
                rel="icon"
                href="/favicon-32x32.png"
                sizes="32x32"
            />
            <link
                rel="icon"
                href="/favicon-192x192.png"
                sizes="192x192"
            />
            <link
                rel="apple-touch-icon"
                href="/apple-touch-icon.png"
            />
            <meta
                name="msapplication-TileImage"
                content="/mstile-270x270.png"
            />

            {/* RSS / Feeds */}
            <link
                rel="alternate"
                type="application/rss+xml"
                title="Cinch Markets Feed"
                href="https://cinchmarkets.com/feed/"
            />
            <link
                rel="alternate"
                type="application/rss+xml"
                title="Cinch Markets Comments Feed"
                href="https://cinchmarkets.com/comments/feed/"
            />

            {/* Styles */}
            <link
                rel="stylesheet"
                href="https://cinchmarkets.com/wp-content/uploads/elementor/google-fonts/css/archivo.css"
            />
            <link
                rel="stylesheet"
                href="https://cinchmarkets.com/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css"
            />

            <link rel="canonical" href="https://cinchmarkets.com/" />
            <link rel="shortlink" href="https://wp.me/Pe6EO8-m" />
        </Head>
    );
}
