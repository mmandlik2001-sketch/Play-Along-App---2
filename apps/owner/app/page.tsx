import Link from 'next/link';

export default function VenueDashboardPage() {
  return (
    <div className="grid">
      <section className="card"><h2>Venue Dashboard</h2><p>Today occupancy: 76%</p></section>
      <section className="card"><h2>Bookings</h2><p>Manage upcoming slots and cancellations.</p><Link href="/bookings"><button className="btn">Open</button></Link></section>
      <section className="card"><h2>Revenue</h2><p>$12,490 this month.</p><Link href="/revenue"><button className="btn">Stats</button></Link></section>
    </div>
  );
}
