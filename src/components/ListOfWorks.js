const ListOfWorks = () => {

    const listOfWorks = [
        {
            projectName: 'SBI',
            works: [
                'Led the development of the banking mobile application to manage money while on the go.',
                'Collaborated with a team of developers and designers to create user-friendly interface and ensure seamless functionality across Android platforms.',
                "Developed and integrated UPI payment systems into the company's existing payment infrastructure,enhancing transaction efficiency and user experience.",
                "Ensured all UPI payment processes adhered to regulatory standards and security protocols."
            ],
        },
    ];
    
    const sbiWorks = listOfWorks[0].works;
    return (
        <ul style={{ listStyleType: 'disc' }}>
            {sbiWorks.map((work, index) => (
                <li key={index}>{work}</li> // Ensure each item has a unique key
            ))}
        </ul>
    );
}

export default ListOfWorks;