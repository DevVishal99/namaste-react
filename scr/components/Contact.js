const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-5 p-5">Contact Details</h1>
            <form>
                <input type="text" placeholder="Name" className="border border-black m-2 p-2"/>
                <input type="text" placeholder="Message" className="border border-black m-2 p-2"/>
                <button className="border border-black m-2 p-2 bg-black text-white rounded-xl">Submit</button>

            </form>
        </div>
    )
}

export default Contact;