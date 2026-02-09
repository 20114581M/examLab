type MemberProps = {
    name: string;
    course:string;
    status:string;
    email:string;
    phone:string;
    activities:string[];
}

function members(props:MemberProps){   
    return(
        <>
            <div className="StudentDetailsContainer">
                <p>Name: {props.name}</p>
                <p>Course: {props.course}</p>
                <p>Status:  {props.status}</p>
                <p>Email: {props.email}</p>
                <p>Phone: {props.phone}</p>
                Activities: <ul>
                {(props.activities).map((IndividualActivity,index) => (
                    <li key={index}>{IndividualActivity}</li>
                ))}
                </ul>
            </div>
        </>
    )
}
export default members