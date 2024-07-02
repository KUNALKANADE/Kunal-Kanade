
const Enquiry = () => {
    const whatsappNumber = '9325617414'; // Replace with your actual WhatsApp number, including the country code

    return (
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl"></h1>
            <div className="text-center tracking-tighter">
                <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 p-2 bg-BLACK-500 text-white rounded-md hover:bg-green-600"
                >
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                        alt="WhatsApp Logo" 
                        className="w-6 h-6"
                    />
                    <span>CONNECT</span>
                </a>
            </div>
        </div>
    );
}

export default Enquiry;
