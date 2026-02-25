import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="grid">
      <section className="card"><h2>Users</h2><p>1,204 active users</p><Link href="/users"><button className="btn">Manage</button></Link></section>
      <section className="card"><h2>Venues</h2><p>82 listed venues</p><Link href="/venues"><button className="btn">Manage</button></Link></section>
      <section className="card"><h2>Bookings</h2><p>342 this week</p><Link href="/bookings"><button className="btn">Overview</button></Link></section>
    </div>
  );
}
