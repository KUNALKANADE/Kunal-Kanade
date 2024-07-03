import './styles.css'; // or wherever your CSS file is located

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
                    className="glow-button inline-flex items-center space-x-2 p-2 rounded-md hover:bg-black-600"
                >

                    <span>Lets Talk</span>
                </a>
            </div>
        </div>
    );
}

export default Enquiry;
