import Link from "next/link";

export default function Page() {
    return (
        <div>
            <p>Dashboard Page</p>
            <Link legacyBehavior href='/'>Go Back</Link>
        </div>
    )
} 