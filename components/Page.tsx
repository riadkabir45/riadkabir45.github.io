function Page({ children,className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`container mx-auto px-4 py-8 min-h-screen ${className}`}>
            {children}
        </div>
    );
}

export default Page;