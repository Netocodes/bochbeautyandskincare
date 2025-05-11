const Privacy = () => {
    return(
       <div>
    <header className="bg-[#8B4513] text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Boch Beauty and Skincare World</h1>
            <p className="mt-2">Terms & Conditions</p>
        </div>
    </header>

    <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">1. Introduction</h2>
                <p>Welcome to <strong>Boch Beauty and Skincare World</strong>. By purchasing from us, you agree to these Terms & Conditions. If you disagree, please refrain from using our services.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">2. Eligibility</h2>
                <p>Users must be <strong>at least 13 years old</strong> to purchase from our store.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">3. Payments & Refunds</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>We accept <strong>one-time manual payments</strong> (bank transfer/copy account).</li>
                    <li>Orders can be <strong>canceled before shipping</strong>.</li>
                    <li>No refunds after shipment.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">4. Prohibited Activities</h2>
                <p>You may <strong>not</strong>:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Use our products for illegal purposes.</li>
                    <li>Harass our team or other customers.</li>
                    <li>Attempt to exploit payment systems.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">5. Intellectual Property</h2>
                <p>All content (images, text, branding) belongs to <strong>Boch Beauty and Skincare World</strong>. Sharing with <strong>attribution</strong> is allowed.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">6. Disclaimers</h2>
                <p>We are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Misuse of products.</li>
                    <li>Delivery delays by third-party couriers.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">7. Modifications</h2>
                <p>We may update these terms. Subscribed users will receive <strong>email notifications</strong> of changes.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">8. Governing Law</h2>
                <p>These terms are governed by <strong>Turkish law</strong>. Disputes must be resolved in Turkish courts.</p>
            </section>
        </div>
    </main>

    <footer className="bg-[#8B4513] text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
            <p>© 2023 Boch Beauty and Skincare World. All rights reserved.</p>
        </div>
    </footer>

       </div>
    )
}

export default Privacy