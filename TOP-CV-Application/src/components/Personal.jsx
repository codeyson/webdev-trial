import '../styles/Personal.css'


function Personal () {
    return (
        <>
        <section className='personal'>
            <div>
                <img className='img-personal' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="img-profile" />
            </div>
            <div className='info-personal'>
                <h1 className='name'>Personal Information</h1>
                <input type="text" placeholder='Write your name:'/>
                <input type="text" placeholder='Write your email:'/>
                <input type="text" placeholder='Write your phone:'/>
            </div>
            
        </section>
        </>
    )

}

export default Personal