import "../styles/globals.css";

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html data-theme="dark" lang="en">
            <head />
            <body className="h-screen w-screen">
                {children}
            </body>
        </html>
    );
}
