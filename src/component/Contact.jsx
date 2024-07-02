import { CONTACT } from "../constant";

const Contact = () => {
return (
    <div className="border-b border-neutal-900 pb-20"
    > <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
<div className="text-center tracking-tighter">
<p className="my-4"> {CONTACT.address}</p>
<p className="my-4">{CONTACT.phoneNo}</p>
<a href="mailto:kunalkdev10@gmail.com" className="border"> 
{CONTACT.email}</a>
</div>

    </div>
)
}

export default Contact;
