import { useState  } from 'react';
import '../stylesheets/contact.css';
import emailjs from 'emailjs-com';
import { Snackbar, Button } from '@mui/material';

const Contact = () => {
	const [formData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [mail, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [name, setName] = useState('')
	const [openSnackbar, setSnackBar] = useState(false);

	const sendMail = (e) => {
		e.preventDefault();

		const templateParams = {
			from_name: name,
			message: message,
			subject: mail,
		};

		emailjs.send('service_8twcprh', 'template_vxbhy9e', templateParams, '0M-bj0oCAGhTY2Iut').then((
			result 
		) => {
			console.log('Email sent successfully: ', result.text);
			setSnackBar(true);
		},
			(error) => {
				console.log('Error in sending mail : ', error.text);
		})
	}
 
	const handleCloseSnackBar = () => {
		
		setSnackBar(false);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};





	return (
		<section id="contact" className="contact-section">
			<h2>Get In Touch</h2>
			<div className="contact-container">
				<div className="contact-info">
					<h3>Contact Information</h3>
					<div className="info-item">
						
						<p>priyadarsinik31@gmail.com</p>
					</div>
					<div className="info-item">
						
						<p>+91 7708309962</p>
					</div>
					<div className="info-item">
						
						<p>Chennai, TamilNadu</p>
					</div>
					<h3>Find Me In</h3>
					<div className="social-links">
						{/* <img src='' alt ='linkedIn'></img> */}
						<div>
						<a href="https://www.linkedin.com/in/priyadarsini-k-b74832213/" target="_blank" rel="noopener noreferrer">
							<img src={process.env.PUBLIC_URL + '/images/linkedIn.png'} alt='linkedIn' width='30px' className='logos'></img>
							<i className="fab fa-linkedin">LinkedIn</i>
							</a>
						</div>
						<div>
						<a href="https://github.com/priya31-prog" target="_blank" rel="noopener noreferrer">
							<img src={process.env.PUBLIC_URL + '/images/github.png'} alt='Github' width='30px' className='logos'></img>
							<i className="fab fa-github">GitHub</i>
							</a>
						</div>
						<div>
						<a href="https://www.hackerrank.com/profile/priyadarsinik31" target="_blank" rel="noopener noreferrer">
							<img src={process.env.PUBLIC_URL + '/images/hackerRank.png'} alt='hackerRank' width='30px' className='logos'></img>
							<i className="fab fa-twitter">HackerRank</i>
							</a>
							</div>
					</div>
				</div>
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={mail}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							value={message}
							onChange={(e)=> setMessage(e.target.value)}
							required
						></textarea>
					</div>
					<button type="submit" className="submit-btn" onClick={sendMail}>Send Message</button>
				</form>


			</div>

			 <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackBar}
                message="Email sent successfully!"
                action={
                    <Button color="inherit" onClick={handleCloseSnackBar}>
                        Close
                    </Button>
                }
            />
		</section>
	);
};

export default Contact;