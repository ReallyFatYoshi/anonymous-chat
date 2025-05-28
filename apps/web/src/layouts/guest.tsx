export default function GuestLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex" style={{ backgroundImage: "url('/assets/pattern.svg')" }}>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </div>
    );
}